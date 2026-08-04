# Architecture — DDD / Hexagonal (Ports & Adapters)

This app follows Domain-Driven Design with a hexagonal layering. The **one rule**
that governs everything: **dependencies point inward**. Inner layers never import
outer ones.

```
  PRESENTATION  →  APPLICATION  →  DOMAIN  ←  INFRASTRUCTURE
   (Angular UI)     (use cases)    (core)      (adapters)
```

`DOMAIN` is the center and depends on nothing. `INFRASTRUCTURE` depends on the
domain (it *implements* domain contracts). `PRESENTATION` is the outermost layer.
Wiring concretes to abstractions happens once, at the **composition root**
(`app.config.ts`), not in components.

## The four layers

| Layer | Path (alias) | Contains | May import |
|-------|--------------|----------|------------|
| **Domain** | `src/domain` (`@domain/*`) | Entities/value objects (`models/`), **ports** (`ports/`), domain services | nothing outward (no Angular, no infra) |
| **Application** | `src/application` (`@application/*`) | Use-case services (`Experience`, `Profile`, `Technologies`) that orchestrate ports | domain only |
| **Infrastructure** | `src/infrastructure` (`@infrastructure/*`) | **Adapters**: repository implementations (`repositories/`), static data (`data/`), external adapters (`adapters/`) | domain |
| **Presentation** | `src/app/presentation` | Angular components, layout, shared UI | application, domain |

> Components stay **dumb**: they `inject()` a use case and render. They do **not**
> import infrastructure and do **not** wire providers.

## Ports & adapters

A **port** is a contract the domain declares ("I need something that can do X").
Because a TypeScript `type` is erased at runtime and cannot be a DI key, each port is
expressed as **a type + an `InjectionToken`** (the runtime stand-in for the type):

```ts
// src/domain/experience/ports/experience.repository.ts
export type ExperienceRepository = {
  getExperiences(): Observable<readonly WorkExperience[]>;
};
export const EXPERIENCE_REPOSITORY =
  new InjectionToken<ExperienceRepository>('ExperienceRepository');
```

An **adapter** (infrastructure) implements it:

```ts
// src/infrastructure/repositories/static-experience.repository.ts
export class StaticExperienceRepository implements ExperienceRepository { … }
```

A **use case** (application) depends only on the abstraction — never on `Static*`:

```ts
// src/application/experience/experience.ts
export class Experience {
  constructor(repository: ExperienceRepository) { … }
}
```

Dependency inversion lives in that **constructor signature**. The use case knows only
the port type; something else decides the concrete.

## Composition root (the ONE wiring place)

`app.config.ts` is where the app boots, so it is the composition root. For each port
it does two bindings — bind the **token** to the adapter, then build the **use case**
from whatever fulfills the token:

```ts
// src/app/app.config.ts
providers: [
  // port (token) → adapter
  { provide: EXPERIENCE_REPOSITORY, useFactory: () => new StaticExperienceRepository() },
  // use case ← the port abstraction
  { provide: Experience,
    useFactory: (repo: ExperienceRepository) => new Experience(repo),
    deps: [EXPERIENCE_REPOSITORY] },
]
```

Components then just:

```ts
// src/app/presentation/features/experience/experience.ts
readonly #experience = inject(Experience);
```

Notes:
- `useFactory: () => new Static…()` (not `useClass`) keeps infrastructure free of
  Angular decorators — adapters stay plain classes.
- `deps: [EXPERIENCE_REPOSITORY]` is how the use-case factory receives the injected
  adapter: Angular resolves the token and passes it as the `repo` argument.
- Swapping an implementation (static → HTTP, or a mock in tests) = change **one line**
  (the token's `useFactory`); nothing in domain/application/presentation moves.

### Why a token here (not just `new Experience(new Static…())`)

The token makes the *port* itself injectable, so any consumer can depend on the
**abstraction** by key — not only this one factory. It also lets tests override just
the repository (`{ provide: EXPERIENCE_REPOSITORY, useValue: mockRepo }`) without
touching the use-case wiring. `LOCALIZATION_PORT` is the same idea consumed directly
via `inject(LOCALIZATION_PORT)`.

## Adding a new feature (checklist)

1. **Domain** — add `models/` types and a `ports/<name>.repository.ts` exporting the
   port **type** and its **`InjectionToken`**.
2. **Infrastructure** — add `repositories/static-<name>.repository.ts` implementing the
   port; put raw data in `data/`.
3. **Application** — add a use-case service in `application/<name>/` taking the port
   type in its constructor.
4. **Composition root** — in `app.config.ts`, bind the token to the adapter and build
   the use case from it:
   ```ts
   { provide: <TOKEN>, useFactory: () => new <StaticAdapter>() },
   { provide: <UseCase>, useFactory: (r) => new <UseCase>(r), deps: [<TOKEN>] },
   ```
5. **Presentation** — build a dumb component that does `inject(<UseCase>)`.

## Wired dependencies

| Port / token | Adapter | Use case built from it |
|--------------|---------|------------------------|
| `EXPERIENCE_REPOSITORY` | `StaticExperienceRepository` | `Experience` |
| `PROFILE_REPOSITORY` | `StaticProfileRepository` | `Profile` |
| `LOCALIZATION_PORT` | `NgxTranslateAdapter` | injected directly via `inject(LOCALIZATION_PORT)` |

All bound once in `src/app/app.config.ts`.

> `CoreRepository` (`StaticTechnologyRepository`) / `Technologies` exist but aren't
> consumed yet — add a `CORE_REPOSITORY` token + the two provider lines when a
> component first needs technologies.

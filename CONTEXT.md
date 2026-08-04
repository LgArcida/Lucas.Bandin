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
It is a plain TypeScript type:

```ts
// src/domain/experience/ports/experience.repository.ts
export type ExperienceRepository = {
  getExperiences(): Observable<readonly WorkExperience[]>;
};
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

`app.config.ts` is where the app boots, so it is the composition root. It binds each
use case to its concrete adapter, once:

```ts
// src/app/app.config.ts
providers: [
  { provide: Experience, useFactory: () => new Experience(new StaticExperienceRepository()) },
  { provide: Profile,    useFactory: () => new Profile(new StaticProfileRepository()) },
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
- Swapping an implementation (static → HTTP, or a mock in tests) = change **one line**
  here; nothing in domain/application/presentation moves.

### When to add an `InjectionToken`

You do **not** need a token for a use case built in a single `useFactory` (above).
Introduce a token only when a dependency must be **injected by its abstraction**
directly — e.g. `LOCALIZATION_PORT`, injected via `inject(LOCALIZATION_PORT)` and
bound in `app.config.ts` with `{ provide: LOCALIZATION_PORT, useClass: NgxTranslateAdapter }`.

## Adding a new feature (checklist)

1. **Domain** — add `models/` types and a `ports/<name>.repository.ts` exporting the
   port **type**.
2. **Infrastructure** — add `repositories/static-<name>.repository.ts` implementing the
   port; put raw data in `data/`.
3. **Application** — add a use-case service in `application/<name>/` taking the port
   type in its constructor.
4. **Composition root** — in `app.config.ts`, add
   `{ provide: <UseCase>, useFactory: () => new <UseCase>(new <StaticAdapter>()) }`.
5. **Presentation** — build a dumb component that does `inject(<UseCase>)`.

## Wired dependencies

| Consumer | Binding (in `app.config.ts`) | Adapter |
|----------|------------------------------|---------|
| `Experience` use case | `useFactory: () => new Experience(new StaticExperienceRepository())` | `StaticExperienceRepository` |
| `Profile` use case | `useFactory: () => new Profile(new StaticProfileRepository())` | `StaticProfileRepository` |
| `LOCALIZATION_PORT` | `useClass: NgxTranslateAdapter` (injected by token) | `NgxTranslateAdapter` |

> `Technologies` / `CoreRepository` (`StaticTechnologyRepository`) exist but aren't
> consumed yet — add a `{ provide: Technologies, useFactory: … }` line when a component
> first needs technologies.

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { LOCALIZATION_PORT } from '@application/localization/localization.port';
import { FEATURE_FLAGS, FeatureFlags } from '@application/feature-flags/feature-flags';
import { NgxTranslateAdapter } from '@infrastructure/adapters/ngx-translate.adapter';
import { TsTranslateLoader } from '@infrastructure/adapters/ts-translate.loader';

// -------------------- Experience -----------------
import { Experience } from '@application/experience/experience';
import { StaticExperienceRepository } from '@infrastructure/repositories/static-experience.repository';
import {
  EXPERIENCE_REPOSITORY,
  ExperienceRepository,
} from '@domain/experience/ports/experience.repository';

// -------------------- Profile -----------------
import { Profile } from '@application/profile/profile';
import { StaticProfileRepository } from '@infrastructure/repositories/static-profile.repository';
import { PROFILE_REPOSITORY, ProfileRepository } from '@domain/profile/ports/profile.repository';

// -------------------- Projects -----------------
import { Projects } from '@application/projects/projects';
import { StaticProjectsRepository } from '@infrastructure/repositories/static-projects.repository';
import { PROJECT_REPOSITORY, ProjectRepository } from '@domain/projects/ports/projects.repository';

// -------------------- Education -----------------
import { HigherEducation } from '@application/education/higherEducation';
import { StaticEducationRepository } from '@infrastructure/repositories/static-education.repository';
import {
  EDUCATION_REPOSITORY,
  EducationRepository,
} from '@domain/education/ports/education.repository';

// -------------------- Interests -----------------
import { Interests } from '@application/interests/interests';
import { StaticInterestsRepository } from '@infrastructure/repositories/static-interests.repository';
import {
  INTERESTS_REPOSITORY,
  InterestsRepository,
} from '@domain/interests/ports/interests.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
    }),
    { provide: TranslateLoader, useClass: TsTranslateLoader },
    { provide: LOCALIZATION_PORT, useClass: NgxTranslateAdapter },
    {
      provide: FEATURE_FLAGS,
      useValue: { beyondCode: true } satisfies FeatureFlags,
    },

    // Composition root: bind each port (token) to its infrastructure adapter,
    // then build the application use case from whatever fulfills the port.
    { provide: EXPERIENCE_REPOSITORY, useFactory: () => new StaticExperienceRepository() },
    {
      provide: Experience,
      useFactory: (repo: ExperienceRepository) => new Experience(repo),
      deps: [EXPERIENCE_REPOSITORY],
    },

    { provide: PROFILE_REPOSITORY, useFactory: () => new StaticProfileRepository() },
    {
      provide: Profile,
      useFactory: (repo: ProfileRepository) => new Profile(repo),
      deps: [PROFILE_REPOSITORY],
    },

    { provide: PROJECT_REPOSITORY, useFactory: () => new StaticProjectsRepository() },
    {
      provide: Projects,
      useFactory: (repo: ProjectRepository) => new Projects(repo),
      deps: [PROJECT_REPOSITORY],
    },

    { provide: EDUCATION_REPOSITORY, useFactory: () => new StaticEducationRepository() },
    {
      provide: HigherEducation,
      useFactory: (repo: EducationRepository) => new HigherEducation(repo),
      deps: [EDUCATION_REPOSITORY],
    },

    { provide: INTERESTS_REPOSITORY, useFactory: () => new StaticInterestsRepository() },
    {
      provide: Interests,
      useFactory: (repo: InterestsRepository) => new Interests(repo),
      deps: [INTERESTS_REPOSITORY],
    },
  ],
};

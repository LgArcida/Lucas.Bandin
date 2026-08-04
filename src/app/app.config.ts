import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { LOCALIZATION_PORT } from '@application/localization/localization.port';
import { NgxTranslateAdapter } from '@infrastructure/adapters/ngx-translate.adapter';
import { TsTranslateLoader } from '@infrastructure/adapters/ts-translate.loader';
import { Experience } from '@application/experience/experience';
import { Profile } from '@application/profile/profile';
import { StaticExperienceRepository } from '@infrastructure/repositories/static-experience.repository';
import { StaticProfileRepository } from '@infrastructure/repositories/static-profile.repository';

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

    // Composition root: bind application use cases to their infrastructure adapters.
    { provide: Experience, useFactory: () => new Experience(new StaticExperienceRepository()) },
    { provide: Profile, useFactory: () => new Profile(new StaticProfileRepository()) },
  ],
};

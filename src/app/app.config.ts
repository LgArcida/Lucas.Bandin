import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { of } from 'rxjs';
import { en, es } from '../assets/i18n';
import { LOCALIZATION_PORT } from '../application/localization/localization.port';
import { ProfileRepository } from '../domain/profile/ports/profile.repository';
import { StaticProfileRepository } from '../infrastructure/repositories/static-profile.repository';
import { Profile } from '../domain/profile/models/profile';
import { NgxTranslateAdapter } from '../infrastructure/adapters/ngx-translate.adapter';

const translations: Record<string, TranslationObject> = { en, es };

const PROFILE_REPOSITORY = new InjectionToken<ProfileRepository>('PROFILE_REPOSITORY');

class TsTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of(translations[lang] ?? {});
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
    }),
    { provide: TranslateLoader, useClass: TsTranslateLoader },
    { provide: LOCALIZATION_PORT, useClass: NgxTranslateAdapter },
    { provide: PROFILE_REPOSITORY, useClass: StaticProfileRepository },
    {
      provide: Profile,
      useFactory: (repo: ProfileRepository) => new Profile(repo),
      deps: [PROFILE_REPOSITORY],
    },
  ],
};

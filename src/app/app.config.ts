import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { of } from 'rxjs';
import { en, es } from '../assets/i18n';
import { LOCALIZATION_PORT } from '../application/localization/localization.port';
import { NgxTranslateAdapter } from '../infrastructure/adapters/ngx-translate.adapter';

const translations: Record<string, TranslationObject> = { en, es };

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
  ],
};

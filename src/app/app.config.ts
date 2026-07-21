import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, provideTranslateLoader, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { of } from 'rxjs';
import { en, es } from './i18n';

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
    provideTranslateLoader(TsTranslateLoader),
  ],
};

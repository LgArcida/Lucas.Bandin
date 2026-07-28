import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { LOCALIZATION_PORT } from '@application/localization/localization.port';
import { NgxTranslateAdapter } from '@infrastructure/adapters/ngx-translate.adapter';
import { TsTranslateLoader } from '@infrastructure/adapters/ts-translate.loader';

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

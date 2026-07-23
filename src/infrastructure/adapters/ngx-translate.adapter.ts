import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationPort } from '../../application/localization/localization.port';

@Injectable()
export class NgxTranslateAdapter implements LocalizationPort {
  readonly #translate = inject(TranslateService);

  setLanguage(lang: string): void {
    this.#translate.use(lang);
  }

  getCurrentLanguage(): string {
    return this.#translate.currentLang() ?? 'en';
  }
}

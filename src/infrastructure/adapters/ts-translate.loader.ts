import { Injectable } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { of } from 'rxjs';
import { en, es } from '../../assets/i18n';

const translations: Record<string, TranslationObject> = { en, es };

@Injectable()
export class TsTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of(translations[lang] ?? {});
  }
}

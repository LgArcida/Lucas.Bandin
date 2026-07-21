import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { TranslateService } from '@ngx-translate/core';

type AppState = {
  language: string;
  isMobile: boolean;
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<AppState>({ language: 'en', isMobile: false }),
  withMethods((store, translate = inject(TranslateService)) => ({
    setLanguage(lang: string): void {
      translate.use(lang);
      patchState(store, { language: lang });
    },
    toggleLanguage(): void {
      const next = store.language() === 'en' ? 'es' : 'en';
      translate.use(next);
      patchState(store, { language: next });
    },
  })),
  withHooks({
    onInit(store) {
      if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        const mql = window.matchMedia(MOBILE_MEDIA_QUERY);
        patchState(store, { isMobile: mql.matches });
        mql.addEventListener('change', (e) => patchState(store, { isMobile: e.matches }));
      }
    },
  }),
);

const MOBILE_MEDIA_QUERY = '(max-width: 48rem)';

import { signal, type Signal } from '@angular/core';

const MOBILE_MEDIA_QUERY = '(max-width: 48rem)';

const isMobileSignal = signal(false);

if (typeof window !== 'undefined' && 'matchMedia' in window) {
  const mql = window.matchMedia(MOBILE_MEDIA_QUERY);
  isMobileSignal.set(mql.matches);
  mql.addEventListener('change', (e) => isMobileSignal.set(e.matches));
}

export class ViewUtils {
  static readonly isMobile: Signal<boolean> = isMobileSignal;
}

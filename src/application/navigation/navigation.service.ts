import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FEATURE_FLAGS } from '../feature-flags/feature-flags';
import { NAV_ITEMS, NavItem } from './nav-items';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly #document = inject(DOCUMENT);
  readonly #featureFlags = inject(FEATURE_FLAGS);

  readonly visibleNavItems: readonly NavItem[] = NAV_ITEMS.filter(
    (item) => item.labelKey !== 'BEYOND_CODE' || this.#featureFlags.beyondCode,
  );

  scrollTo(targetId: string): void {
    this.#document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

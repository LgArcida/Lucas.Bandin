import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly #document = inject(DOCUMENT);

  scrollTo(targetId: string): void {
    this.#document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

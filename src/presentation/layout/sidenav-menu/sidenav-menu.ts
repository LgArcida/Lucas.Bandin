import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { FEATURE_FLAGS } from '@application/feature-flags/feature-flags';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-sidenav-menu',
  imports: [MatListModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './sidenav-menu.html',
  styleUrl: './sidenav-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavMenuComponent {
  protected readonly translations = Translations;
  readonly #featureFlags = inject(FEATURE_FLAGS);

  protected readonly beyondCodeEnabled = this.#featureFlags.beyondCode;

  readonly navigate = output<void>();
}

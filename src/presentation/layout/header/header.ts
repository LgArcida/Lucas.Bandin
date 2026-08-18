import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { FEATURE_FLAGS } from '@application/feature-flags/feature-flags';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    TranslatePipe,
    LanguageSwitcherComponent,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly translations = Translations;
  readonly #featureFlags = inject(FEATURE_FLAGS);
  protected readonly beyondCodeEnabled = this.#featureFlags.beyondCode;

  readonly menuToggle = output<void>();
}

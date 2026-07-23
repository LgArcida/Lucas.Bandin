import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppStore } from '../../../../application/state/app.store';

interface LanguageOption {
  code: string;
  flag: string;
  label: string;
}

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  protected readonly appStore = inject(AppStore);

  protected readonly languages: LanguageOption[] = [
    { code: 'en', flag: 'assets/flags/en.svg', label: 'Switch to English' },
    { code: 'es', flag: 'assets/flags/es.svg', label: 'Switch to Spanish' },
  ];
}

import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { NAV_ITEMS, NavItem } from '@application/navigation/nav-items';
import { NavigationService } from '@application/navigation/navigation.service';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    TranslatePipe,
    LanguageSwitcherComponent,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly menuToggle = output<void>();
  readonly #navigation = inject(NavigationService);
  protected readonly navItems = NAV_ITEMS;

  protected navigate(item: NavItem): void {
    if (item.targetId) {
      this.#navigation.scrollTo(item.targetId);
    }
  }
}

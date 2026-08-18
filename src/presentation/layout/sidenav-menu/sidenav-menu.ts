import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher';
import { NavItem } from '@application/navigation/nav-items';
import { NavigationService } from '@application/navigation/navigation.service';
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
  readonly navigate = output<void>();
  readonly #navigation = inject(NavigationService);
  protected readonly navItems = this.#navigation.visibleNavItems;

  protected onNavigate(item: NavItem): void {
    if (item.targetId) {
      this.#navigation.scrollTo(item.targetId);
    }
    this.navigate.emit();
  }
}

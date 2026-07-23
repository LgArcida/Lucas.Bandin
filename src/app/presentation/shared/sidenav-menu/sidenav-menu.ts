import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { NAV_ITEMS, NavItem } from '../../../../application/navigation/nav-items';
import { NavigationService } from '../../../../application/navigation/navigation.service';

@Component({
  selector: 'app-sidenav-menu',
  imports: [MatListModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './sidenav-menu.html',
  styleUrl: './sidenav-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavMenuComponent {
  readonly navigate = output<void>();
  readonly #navigation = inject(NavigationService);
  protected readonly navItems = NAV_ITEMS;

  protected onNavigate(item: NavItem): void {
    if (item.targetId) {
      this.#navigation.scrollTo(item.targetId);
    }
    this.navigate.emit();
  }
}

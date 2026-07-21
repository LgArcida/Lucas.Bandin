import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { NAV_ITEMS, NavItem, scrollToSection } from '../../nav/nav-items';

@Component({
  selector: 'app-sidenav-menu',
  imports: [MatListModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './sidenav-menu.html',
  styleUrl: './sidenav-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavMenuComponent {
  readonly navigate = output<void>();
  protected readonly navItems = NAV_ITEMS;

  protected onNavigate(item: NavItem): void {
    if (item.targetId) {
      scrollToSection(item.targetId);
    }
    this.navigate.emit();
  }
}

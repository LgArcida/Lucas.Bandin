import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { NAV_ITEMS, NavItem, scrollToSection } from '../../nav/nav-items';

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
  protected readonly navItems = NAV_ITEMS;

  protected navigate(item: NavItem): void {
    if (item.targetId) {
      scrollToSection(item.targetId);
    }
  }
}

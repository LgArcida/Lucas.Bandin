import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppStore } from './store/app.store';
import { HeaderComponent } from './components/header/header';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu';
import { AboutComponent } from './sections/about/about';
import { MeComponent } from './sections/me/me';
import { SkillsComponent } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    HeaderComponent,
    SidenavMenuComponent,
    MeComponent,
    AboutComponent,
    SkillsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly #document = inject(DOCUMENT);
  readonly #appStore = inject(AppStore);

  constructor() {
    effect(() => {
      this.#document.documentElement.lang = this.#appStore.language();
    });
  }
}

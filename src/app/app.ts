import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppStore } from '@application/state/app.store';
import { HeaderComponent } from './presentation/layout/header/header';
import { SidenavMenuComponent } from './presentation/layout/sidenav-menu/sidenav-menu';
import { AboutComponent } from './presentation/features/profile/about/about';
import { MeComponent } from './presentation/features/profile/me/me';
import { SkillsComponent } from './presentation/features/profile/skills/skills';
import { FooterComponent } from './presentation/layout/footer/footer';
import { ExperienceComponent } from './presentation/features/experience/experience/experience';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    HeaderComponent,
    SidenavMenuComponent,
    MeComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  providers: [],
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

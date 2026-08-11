import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppStore } from '@application/state/app.store';
import { HeaderComponent } from './presentation/layout/header/header';
import { SidenavMenuComponent } from './presentation/layout/sidenav-menu/sidenav-menu';
import { AboutComponent } from './presentation/features/about-me/about-me';
import { MeComponent } from './presentation/features/me/me';
import { SkillsComponent } from './presentation/features/skills/skills';
import { FooterComponent } from './presentation/layout/footer/footer';
import { ExperienceComponent } from './presentation/features/experience/experience';
import { ProjectsComponent } from './presentation/features/projects/projects';

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
    ProjectsComponent,
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

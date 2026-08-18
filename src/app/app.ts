import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppStore } from '@application/state/app.store';
import { FEATURE_FLAGS } from '@application/feature-flags/feature-flags';
import { HeaderComponent } from '@presentation/layout/header/header';
import { SidenavMenuComponent } from '@presentation/layout/sidenav-menu/sidenav-menu';
import { AboutComponent } from '@presentation/features/about-me/about-me';
import { MeComponent } from '@presentation/features/me/me';
import { SkillsComponent } from '@presentation/features/skills/skills';
import { FooterComponent } from '@presentation/layout/footer/footer';
import { ExperienceComponent } from '@presentation/features/experience/experience';
import { ProjectsComponent } from '@presentation/features/projects/projects';
import { EducationComponent } from '@presentation/features/education/education';
import { BeyondCodeComponent } from '@presentation/features/beyond-code/beyond-code';
import { MateLoaderComponent } from '@presentation/shared/mate-loader/mate-loader';

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
    EducationComponent,
    BeyondCodeComponent,
    MateLoaderComponent,
  ],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly #document = inject(DOCUMENT);
  readonly #appStore = inject(AppStore);
  readonly #featureFlags = inject(FEATURE_FLAGS);
  protected readonly beyondCodeEnabled = this.#featureFlags.beyondCode;

  constructor() {
    effect(() => {
      this.#document.documentElement.lang = this.#appStore.language();
    });
  }
}

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { Profile } from '@domain/profile/models/profile';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { StaticProfileRepository } from '@infrastructure/repositories/static-profile.repository';
import { ExpandablePanelComponent } from '../../../shared/expandable-panel/expandable-panel';
import { SkillListComponent } from './skill-list/skill-list';

@Component({
  selector: 'app-skills',
  imports: [MatTabsModule, TranslatePipe, ExpandablePanelComponent, SkillListComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    StaticProfileRepository,
    {
      provide: Profile,
      useFactory: (repo: ProfileRepository) => new Profile(repo),
      deps: [StaticProfileRepository],
    },
  ],
})
export class SkillsComponent {
  readonly #profile = inject(Profile);

  protected readonly selectedTab = signal(0);
  readonly #categories = toSignal(this.#profile.skills$, { initialValue: [] });

  protected readonly frontendSkills = computed(
    () => this.#categories().find((c) => c.name === 'Frontend')?.skills ?? [],
  );

  protected readonly backendSkills = computed(
    () => this.#categories().find((c) => c.name === 'Backend')?.skills ?? [],
  );

  protected readonly aiSkills = computed(
    () => this.#categories().find((c) => c.name === 'AI')?.skills ?? [],
  );

  protected readonly platformSkills = computed(
    () => this.#categories().find((c) => c.name === 'Platform')?.skills ?? [],
  );
}

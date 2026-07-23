import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { Profile } from '../../../../../domain/profile/models/profile';
import type { Skill } from '../../../../../domain/profile/models/skill';
import { ProfileRepository } from '../../../../../domain/profile/ports/profile.repository';
import { StaticProfileRepository } from '../../../../../infrastructure/repositories/static-profile.repository';
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

  protected readonly frontendSkills: readonly Skill[];
  protected readonly backendSkills: readonly Skill[];
  protected readonly aiSkills: readonly Skill[];
  protected readonly platformSkills: readonly Skill[];
  protected readonly selectedTab = signal(0);

  constructor() {
    const categories = this.#profile.skills;
    this.frontendSkills = categories.find(c => c.name === 'Frontend')?.skills ?? [];
    this.backendSkills = categories.find(c => c.name === 'Backend')?.skills ?? [];
    this.aiSkills = categories.find(c => c.name === 'AI')?.skills ?? [];
    this.platformSkills = categories.find(c => c.name === 'Platform')?.skills ?? [];
  }
}

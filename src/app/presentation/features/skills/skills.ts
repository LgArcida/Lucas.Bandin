import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_CATEGORY_NAMES } from '@domain/profile/models/skill-category';
import { Profile } from '@application/profile/profile';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { SkillListComponent } from './skill-list/skill-list';

@Component({
  selector: 'app-skills',
  imports: [MatTabsModule, TranslatePipe, ExpandablePanelComponent, SkillListComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly #profile = inject(Profile);

  protected readonly selectedTab = signal(0);
  readonly #categories = toSignal(this.#profile.skills$, { initialValue: [] });

  protected readonly frontendSkills = computed(
    () => this.#categories().find((c) => c.name === SKILL_CATEGORY_NAMES.Frontend)?.skills ?? [],
  );

  protected readonly backendSkills = computed(
    () => this.#categories().find((c) => c.name === SKILL_CATEGORY_NAMES.Backend)?.skills ?? [],
  );

  protected readonly aiSkills = computed(
    () => this.#categories().find((c) => c.name === SKILL_CATEGORY_NAMES.AI)?.skills ?? [],
  );

  protected readonly platformSkills = computed(
    () => this.#categories().find((c) => c.name === SKILL_CATEGORY_NAMES.Platform)?.skills ?? [],
  );
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../components/expandable-panel/expandable-panel';
import { SkillListComponent } from './skill-list/skill-list';
import {
  AI_SKILLS,
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  PLATFORM_SKILLS,
  skillSort,
} from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [MatTabsModule, TranslatePipe, ExpandablePanelComponent, SkillListComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly frontendSkills = FRONTEND_SKILLS.sort(skillSort);
  protected readonly backendSkills = BACKEND_SKILLS.sort(skillSort);
  protected readonly aiSkills = AI_SKILLS.sort(skillSort);
  protected readonly platformSkills = PLATFORM_SKILLS.sort(skillSort);

  protected readonly selectedTab = signal(0);
}

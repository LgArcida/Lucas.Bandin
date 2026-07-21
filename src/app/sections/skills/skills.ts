import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../components/expandable-panel/expandable-panel';
import { SkillListComponent } from './skill-list/skill-list';
import { SkillBubbleChartComponent } from './skill-bubble-chart/skill-bubble-chart';

@Component({
  selector: 'app-skills',
  imports: [MatTabsModule, TranslatePipe, ExpandablePanelComponent, SkillListComponent, SkillBubbleChartComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly selectedTab = signal(0);
}

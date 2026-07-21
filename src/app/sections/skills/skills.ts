import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../components/expandable-panel/expandable-panel';
import { SKILLS } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage, TranslatePipe, MatListModule, MatProgressBarModule, ExpandablePanelComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly skills = SKILLS;
}

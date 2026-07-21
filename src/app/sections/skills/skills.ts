import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../components/expandable-panel/expandable-panel';

@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage, TranslatePipe, ExpandablePanelComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {}

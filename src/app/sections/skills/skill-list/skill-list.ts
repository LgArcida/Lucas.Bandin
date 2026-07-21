import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CORE_SKILLS } from '../skills.data';

@Component({
  selector: 'app-skill-list',
  imports: [NgOptimizedImage, MatListModule, MatProgressBarModule],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  protected readonly skills = CORE_SKILLS;
}

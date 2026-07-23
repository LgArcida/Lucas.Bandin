import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../../shared/expandable-panel/expandable-panel';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, TranslatePipe, ExpandablePanelComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}

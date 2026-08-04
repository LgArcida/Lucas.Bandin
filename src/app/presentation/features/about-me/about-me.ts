import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { KEYS } from '../../../../assets/i18n/keys';

@Component({
  selector: 'app-about-me',
  imports: [NgOptimizedImage, TranslatePipe, ExpandablePanelComponent],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly keys = KEYS;
}

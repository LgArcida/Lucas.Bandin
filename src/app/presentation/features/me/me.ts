import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Translations } from '../../../../assets/i18n/translations';

@Component({
  selector: 'app-me',
  imports: [NgOptimizedImage, TranslatePipe],
  templateUrl: './me.html',
  styleUrl: './me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeComponent {
  protected readonly translations = Translations;
}

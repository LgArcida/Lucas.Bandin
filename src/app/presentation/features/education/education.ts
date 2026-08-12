import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { NgOptimizedImage } from '@angular/common';
import { HigherEducation } from '@application/education/higherEducation';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { FormatPeriodPipe } from '../../shared/pipes/format-period.pipe';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-education',
  imports: [
    TranslatePipe,
    MatListModule,
    NgOptimizedImage,
    ExpandablePanelComponent,
    FormatPeriodPipe,
  ],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly translations = Translations;
  readonly #education = inject(HigherEducation);
  protected readonly entries = toSignal(this.#education.education$, { initialValue: [] });
}

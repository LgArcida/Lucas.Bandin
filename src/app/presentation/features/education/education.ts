import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NgOptimizedImage } from '@angular/common';
import { HigherEducation } from '@application/education/higherEducation';
import { Education } from '@domain/education/models/education';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { EducationDetailsBottomSheetComponent } from './education-details-bottom-sheet/education-details-bottom-sheet';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-education',
  imports: [
    TranslatePipe,
    MatListModule,
    NgOptimizedImage,
    ExpandablePanelComponent,
  ],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly translations = Translations;
  readonly #education = inject(HigherEducation);
  readonly #bottomSheet = inject(MatBottomSheet);
  protected readonly entries = toSignal(this.#education.education$, { initialValue: [] });

  protected openDetails(entry: Education): void {
    this.#bottomSheet.open(EducationDetailsBottomSheetComponent, { data: entry });
  }
}

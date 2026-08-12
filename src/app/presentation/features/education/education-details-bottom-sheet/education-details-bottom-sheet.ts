import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { Education } from '@domain/education/models/education';
import { FormatPeriodPipe } from '../../../shared/pipes/format-period.pipe';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-education-details-bottom-sheet',
  imports: [
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
    FormatPeriodPipe,
    NgOptimizedImage,
  ],
  templateUrl: './education-details-bottom-sheet.html',
  styleUrl: './education-details-bottom-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationDetailsBottomSheetComponent {
  protected readonly translations = Translations;
  protected readonly education = inject<Education>(MAT_BOTTOM_SHEET_DATA);
  readonly #bottomSheetRef = inject(MatBottomSheetRef<EducationDetailsBottomSheetComponent>);

  protected onCloseClick(): void {
    this.#bottomSheetRef.dismiss();
  }
}

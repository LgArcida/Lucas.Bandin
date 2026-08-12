import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { BalletMilestone } from '@domain/interests/models/ballet-milestone';
import { FormatPeriodPipe } from '../../../shared/pipes/format-period.pipe';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-ballet-milestone-bottom-sheet',
  imports: [MatButtonModule, MatIconModule, TranslatePipe, FormatPeriodPipe, NgOptimizedImage],
  templateUrl: './ballet-milestone-bottom-sheet.html',
  styleUrl: './ballet-milestone-bottom-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalletMilestoneBottomSheetComponent {
  protected readonly translations = Translations;
  protected readonly milestone = inject<BalletMilestone>(MAT_BOTTOM_SHEET_DATA);
  readonly #bottomSheetRef = inject(MatBottomSheetRef<BalletMilestoneBottomSheetComponent>);

  protected onCloseClick(): void {
    this.#bottomSheetRef.dismiss();
  }
}

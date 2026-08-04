import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { WorkExperience } from '@domain/experience/models/work-experience';
import { FormatPeriodPipe } from '../../../shared/pipes/format-period.pipe';

@Component({
  selector: 'app-work-experience-bottom-sheet',
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
    FormatPeriodPipe,
    NgOptimizedImage,
  ],
  templateUrl: './work-experience-bottom-sheet.html',
  styleUrl: './work-experience-bottom-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceBottomSheetComponent {
  protected readonly experience = inject<WorkExperience>(MAT_BOTTOM_SHEET_DATA);
  readonly #bottomSheetRef = inject(MatBottomSheetRef<WorkExperienceBottomSheetComponent>);

  protected close(): void {
    this.#bottomSheetRef.dismiss();
  }
}

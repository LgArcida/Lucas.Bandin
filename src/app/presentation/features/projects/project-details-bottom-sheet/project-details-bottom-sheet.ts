import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '@domain/projects/models/project';
import { FormatPeriodPipe } from '../../../shared/pipes/format-period.pipe';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-project-details-bottom-sheet',
  imports: [MatChipsModule, MatButtonModule, MatIconModule, TranslatePipe, FormatPeriodPipe],
  templateUrl: './project-details-bottom-sheet.html',
  styleUrl: './project-details-bottom-sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsBottomSheetComponent {
  protected readonly translations = Translations;
  protected readonly project = inject<Project>(MAT_BOTTOM_SHEET_DATA);
  readonly #bottomSheetRef = inject(MatBottomSheetRef<ProjectDetailsBottomSheetComponent>);

  protected onCloseClick(): void {
    this.#bottomSheetRef.dismiss();
  }
}
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { Experience } from '@application/experience/experience';
import { WorkExperience } from '@domain/experience/models/work-experience';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { WorkExperienceBottomSheetComponent } from './work-experience-bottom-sheet/work-experience-bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { KEYS } from '../../../../assets/i18n/keys';

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, NgOptimizedImage, ExpandablePanelComponent, MatListModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly keys = KEYS;
  readonly #experience = inject(Experience);
  readonly #bottomSheet = inject(MatBottomSheet);
  protected readonly experiences = toSignal(this.#experience.experiences$, { initialValue: [] });

  protected openDetails(exp: WorkExperience): void {
    this.#bottomSheet.open(WorkExperienceBottomSheetComponent, { data: exp });
  }
}

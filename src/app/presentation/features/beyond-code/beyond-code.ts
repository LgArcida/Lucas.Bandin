import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { Interests } from '@application/interests/interests';
import { BalletMilestone } from '@domain/interests/models/ballet-milestone';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { BalletMilestoneBottomSheetComponent } from './ballet-milestone-bottom-sheet/ballet-milestone-bottom-sheet';
import { Translations } from '@i18n/translations';

@Component({
  selector: 'app-beyond-code',
  imports: [TranslatePipe, MatIconModule, MatListModule, ExpandablePanelComponent],
  templateUrl: './beyond-code.html',
  styleUrl: './beyond-code.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeyondCodeComponent {
  protected readonly translations = Translations;
  readonly #interests = inject(Interests);
  readonly #bottomSheet = inject(MatBottomSheet);
  protected readonly balletMilestones = toSignal(this.#interests.balletMilestones$, {
    initialValue: [],
  });
  protected readonly techHobbies = toSignal(this.#interests.techHobbies$, { initialValue: [] });

  protected openDetails(milestone: BalletMilestone): void {
    this.#bottomSheet.open(BalletMilestoneBottomSheetComponent, { data: milestone });
  }
}

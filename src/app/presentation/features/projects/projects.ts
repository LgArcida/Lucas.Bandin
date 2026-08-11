import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TranslatePipe } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { Projects } from '@application/projects/projects';
import { Project } from '@domain/projects/models/project';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { ProjectDetailsBottomSheetComponent } from './project-details-bottom-sheet/project-details-bottom-sheet';
import { Translations } from '@i18n/translations';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, MatListModule, ExpandablePanelComponent, NgOptimizedImage],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly translations = Translations;
  readonly #projects = inject(Projects);
  readonly #bottomSheet = inject(MatBottomSheet);
  protected readonly projects = toSignal(this.#projects.projects$, { initialValue: [] });

  protected openDetails(project: Project): void {
    this.#bottomSheet.open(ProjectDetailsBottomSheetComponent, { data: project });
  }
}

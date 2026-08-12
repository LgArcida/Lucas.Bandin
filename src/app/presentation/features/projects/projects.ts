import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslatePipe } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { Projects } from '@application/projects/projects';
import { Project, PROJECT_TYPES } from '@domain/projects/models/project';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { ProjectDetailsBottomSheetComponent } from './project-details-bottom-sheet/project-details-bottom-sheet';
import { Translations } from '@i18n/translations';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    TranslatePipe,
    MatTabsModule,
    MatListModule,
    ExpandablePanelComponent,
    NgOptimizedImage,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly translations = Translations;
  readonly #projects = inject(Projects);
  readonly #bottomSheet = inject(MatBottomSheet);
  protected readonly projects = toSignal(this.#projects.projects$, { initialValue: [] });

  protected readonly professionalProjects = computed(() =>
    this.projects().filter((project) => project.type === PROJECT_TYPES.Professional),
  );

  protected readonly personalProjects = computed(() =>
    this.projects().filter((project) => project.type === PROJECT_TYPES.Personal),
  );

  protected openDetails(project: Project): void {
    this.#bottomSheet.open(ProjectDetailsBottomSheetComponent, { data: project });
  }
}

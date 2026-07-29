import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '@application/experience/experience';
import { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import { StaticExperienceRepository } from '@infrastructure/repositories/static-experience.repository';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslatePipe } from '@ngx-translate/core';
import { ExpandablePanelComponent } from '../../shared/expandable-panel/expandable-panel';
import { FormatPeriodPipe } from '../../shared/pipes/format-period.pipe';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    MatChipsModule,
    MatExpansionModule,
    TranslatePipe,
    ExpandablePanelComponent,
    FormatPeriodPipe,
    NgOptimizedImage,
  ],
  providers: [
    StaticExperienceRepository,
    {
      provide: Experience,
      useFactory: (repo: ExperienceRepository) => new Experience(repo),
      deps: [StaticExperienceRepository],
    },
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly #experience = inject(Experience);
  protected readonly experiences = toSignal(this.#experience.experiences$, { initialValue: [] });
}

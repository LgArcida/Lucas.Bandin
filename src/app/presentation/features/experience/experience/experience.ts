import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Experience } from '@application/experience/experience';
import { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import { StaticExperienceRepository } from '@infrastructure/repositories/static-experience.repository';
import { NgOptimizedImage } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import type { Period } from '@domain/experience/models/period';

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage, MatListModule],
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

  protected formatPeriod(period: Period): string {
    const start = period.start.toFormat('MMM yyyy');
    const end = period.isCurrent ? 'Present' : period.end!.toFormat('MMM yyyy');
    return `${start} – ${end}`;
  }

  protected trackByCompany(_index: number, exp: { company: { name: string } }): string {
    return exp.company.name;
  }

  protected trackByTitle(_index: number, h: { title: string }): string {
    return h.title;
  }

  protected trackBySkillName(_index: number, s: { name: string }): string {
    return s.name;
  }
}

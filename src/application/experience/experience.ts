import { Observable } from 'rxjs';
import type { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import type { WorkExperience } from '@domain/experience/models/work-experience';

export class Experience {
  readonly experiences$: Observable<readonly WorkExperience[]>;

  constructor(repository: ExperienceRepository) {
    this.experiences$ = repository.getExperiences();
  }
}

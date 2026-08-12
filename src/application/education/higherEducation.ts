import { Observable } from 'rxjs';
import type { EducationRepository } from '@domain/education/ports/education.repository';
import type { Education } from '@domain/education/models/education';

export class HigherEducation {
  readonly education$: Observable<readonly Education[]>;

  constructor(repository: EducationRepository) {
    this.education$ = repository.getEducationEntries();
  }
}

import { Observable } from 'rxjs';
import type { CoreRepository } from '@domain/core/ports/core.repository';
import type { Technology } from '@domain/core/models/technology';

export class Technologies {
  readonly technologies$: Observable<readonly Technology[]>;

  constructor(repository: CoreRepository) {
    this.technologies$ = repository.getTechnologies();
  }
}

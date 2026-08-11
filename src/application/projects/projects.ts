import { Observable } from 'rxjs';
import type { ProjectRepository } from '@domain/projects/ports/projects.repository';
import type { Project } from '@domain/projects/models/project';

export class Projects {
  readonly projects$: Observable<readonly Project[]>;

  constructor(repository: ProjectRepository) {
    this.projects$ = repository.getProjects();
  }
}
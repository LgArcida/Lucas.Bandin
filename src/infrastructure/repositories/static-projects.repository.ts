import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectRepository } from '@domain/projects/ports/projects.repository';
import { Project } from '@domain/projects/models/project';
import { PROJECTS_DATA } from '../data/projects';

const PROJECTS: readonly Project[] = PROJECTS_DATA.map((d) =>
  Project.create(d),
);

export class StaticProjectsRepository implements ProjectRepository {
  readonly #projects$ = new BehaviorSubject<readonly Project[]>(PROJECTS);

  getProjects(): Observable<readonly Project[]> {
    return this.#projects$.asObservable();
  }
}
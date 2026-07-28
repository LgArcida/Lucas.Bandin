import { BehaviorSubject, Observable } from 'rxjs';
import { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import { WorkExperience } from '@domain/experience/models/work-experience';
import { EXPERIENCES_DATA } from '../data/experiences';

const EXPERIENCES: readonly WorkExperience[] = EXPERIENCES_DATA.map((d) =>
  WorkExperience.create(d),
);

export class StaticExperienceRepository implements ExperienceRepository {
  readonly #experiences$ = new BehaviorSubject<readonly WorkExperience[]>(EXPERIENCES);

  getExperiences(): Observable<readonly WorkExperience[]> {
    return this.#experiences$.asObservable();
  }
}

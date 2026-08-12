import { BehaviorSubject, Observable } from 'rxjs';
import { EducationRepository } from '@domain/education/ports/education.repository';
import { Education } from '@domain/education/models/education';
import { EDUCATION_DATA } from '../data/education';

const EDUCATION_ENTRIES: readonly Education[] = EDUCATION_DATA.map((d) => Education.create(d));

export class StaticEducationRepository implements EducationRepository {
  readonly #education$ = new BehaviorSubject<readonly Education[]>(EDUCATION_ENTRIES);

  getEducationEntries(): Observable<readonly Education[]> {
    return this.#education$.asObservable();
  }
}

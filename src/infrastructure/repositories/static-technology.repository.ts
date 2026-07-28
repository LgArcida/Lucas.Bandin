import { BehaviorSubject, Observable } from 'rxjs';
import { CoreRepository } from '@domain/core/ports/core.repository';
import { Technology } from '@domain/core/models/technology';
import { TECHNOLOGIES } from '../data/technologies';

const buildTechnologyRepository = (): readonly Technology[] => {
  return TECHNOLOGIES.map((item) => Technology.create(item));
};

export class StaticTechnologyRepository implements CoreRepository {
  readonly #technologies$ = new BehaviorSubject<readonly Technology[]>(buildTechnologyRepository());

  getTechnologies(): Observable<readonly Technology[]> {
    return this.#technologies$.asObservable();
  }
}

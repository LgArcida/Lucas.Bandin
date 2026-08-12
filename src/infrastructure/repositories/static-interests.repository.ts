import { BehaviorSubject, Observable } from 'rxjs';
import { InterestsRepository } from '@domain/interests/ports/interests.repository';
import { BalletMilestone } from '@domain/interests/models/ballet-milestone';
import { TechHobby } from '@domain/interests/models/tech-hobby';
import { BALLET_MILESTONES_DATA, TECH_HOBBIES_DATA } from '../data/interests';

const BALLET_MILESTONES: readonly BalletMilestone[] = BALLET_MILESTONES_DATA.map((d) =>
  BalletMilestone.create(d),
);
const TECH_HOBBIES: readonly TechHobby[] = TECH_HOBBIES_DATA.map((d) => TechHobby.create(d));

export class StaticInterestsRepository implements InterestsRepository {
  readonly #balletMilestones$ = new BehaviorSubject<readonly BalletMilestone[]>(BALLET_MILESTONES);
  readonly #techHobbies$ = new BehaviorSubject<readonly TechHobby[]>(TECH_HOBBIES);

  getBalletMilestones(): Observable<readonly BalletMilestone[]> {
    return this.#balletMilestones$.asObservable();
  }

  getTechHobbies(): Observable<readonly TechHobby[]> {
    return this.#techHobbies$.asObservable();
  }
}

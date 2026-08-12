import { Observable } from 'rxjs';
import type { InterestsRepository } from '@domain/interests/ports/interests.repository';
import type { BalletMilestone } from '@domain/interests/models/ballet-milestone';
import type { TechHobby } from '@domain/interests/models/tech-hobby';

export class Interests {
  readonly balletMilestones$: Observable<readonly BalletMilestone[]>;
  readonly techHobbies$: Observable<readonly TechHobby[]>;

  constructor(repository: InterestsRepository) {
    this.balletMilestones$ = repository.getBalletMilestones();
    this.techHobbies$ = repository.getTechHobbies();
  }
}

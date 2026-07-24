import { Observable } from 'rxjs';
import type { ProfileRepository } from '../ports/profile.repository';
import type { SkillCategory } from './skill-category';

export class Profile {
  readonly skills$: Observable<SkillCategory[]>;

  constructor(repository: ProfileRepository) {
    this.skills$ = repository.getSkills();
  }
}

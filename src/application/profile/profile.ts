import { Observable } from 'rxjs';
import type { ProfileRepository } from '@domain/profile/ports/profile.repository';
import type { SkillCategory } from '@domain/profile/models/skill-category';
import type { SocialLink } from '@domain/profile/models/social-link';

export class Profile {
  readonly skills$: Observable<readonly SkillCategory[]>;
  readonly socials$: Observable<readonly SocialLink[]>;

  constructor(repository: ProfileRepository) {
    this.skills$ = repository.getSkills();
    this.socials$ = repository.getSocials();
  }
}

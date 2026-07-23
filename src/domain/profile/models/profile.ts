import type { ProfileRepository } from '../ports/profile.repository';
import type { SkillCategory } from './skill-category';

export class Profile {
  constructor(private readonly repository: ProfileRepository) {}

  get skills(): SkillCategory[] {
    return this.repository.getSkills();
  }
}

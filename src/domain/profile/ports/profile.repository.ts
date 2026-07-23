import type { SkillCategory } from '../models/skill-category';

export interface ProfileRepository {
  getSkills(): SkillCategory[];
}

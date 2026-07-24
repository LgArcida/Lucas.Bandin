import type { SkillCategory } from '../models/skill-category';

export type ProfileRepository = {
  getSkills(): SkillCategory[];
};

import type { Skill } from '../models/skill';
import type { SkillCategory } from '../models/skill-category';

export class ProficiencyCalculator {
  static proficientRatio(skills: readonly Skill[]): number {
    if (skills.length === 0) return 0;
    const proficient = skills.filter(s => s.level >= 5).length;
    return proficient / skills.length;
  }

  static isWellCovered(category: SkillCategory): boolean {
    return ProficiencyCalculator.proficientRatio(category.skills) >= 0.8;
  }
}

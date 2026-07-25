import { z } from 'zod';
import { Skill, skillSchema } from './skill';

export const skillCategorySchema = z.object({
  name: z.string().min(1, 'Category name must not be empty'),
  skills: z.array(skillSchema).min(1, 'Category must have at least one skill'),
});

export type SkillCategoryModel = z.infer<typeof skillCategorySchema>;

export class SkillCategory {
  private readonly skillList: readonly Skill[];

  private constructor(private readonly data: SkillCategoryModel) {
    this.skillList = data.skills.map((s) => Skill.create(s));
  }

  static create(input: unknown): SkillCategory {
    return new SkillCategory(skillCategorySchema.parse(input));
  }

  get name(): string {
    return this.data.name;
  }

  get skills(): readonly Skill[] {
    return this.skillList;
  }
}

export const SKILL_CATEGORY_NAMES = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  AI: 'AI',
  Platform: 'Platform',
} as const;

export type SkillCategoryName = (typeof SKILL_CATEGORY_NAMES)[keyof typeof SKILL_CATEGORY_NAMES];

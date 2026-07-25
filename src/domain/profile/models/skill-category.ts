import { z } from 'zod';
import { Skill, skillSchema } from './skill';

export const skillCategorySchema = z.object({
  name: z.string().min(1, 'Category name must not be empty'),
  skills: z.array(skillSchema).min(1, 'Category must have at least one skill'),
});

export type SkillCategoryModel = z.infer<typeof skillCategorySchema>;

export class SkillCategory {
  readonly skills: readonly Skill[];

  private constructor(private readonly data: SkillCategoryModel) {
    this.skills = Object.freeze(
      data.skills
        .map((s) => Skill.create(s))
        .filter((s): s is Skill => s !== undefined),
    );
  }

  static create(input: unknown): SkillCategory | undefined {
    const result = skillCategorySchema.safeParse(input);
    if (!result.success) return undefined;
    return new SkillCategory(result.data);
  }

  get name(): string {
    return this.data.name;
  }
}

export const SKILL_CATEGORY_NAMES = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  AI: 'AI',
  Platform: 'Platform',
} as const;

export type SkillCategoryName = (typeof SKILL_CATEGORY_NAMES)[keyof typeof SKILL_CATEGORY_NAMES];

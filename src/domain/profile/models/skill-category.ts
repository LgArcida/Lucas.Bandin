import { z } from 'zod';
import { Skill } from './skill';

const schema = z.object({
  name: z.string().min(1, 'Category name must not be empty'),
  skills: z.array(z.any()).min(1, 'Category must have at least one skill'),
});

type SkillCategoryData = z.infer<typeof schema>;

export class SkillCategory {
  readonly skills: readonly Skill[];
  private readonly _name: string;

  private constructor(data: SkillCategoryData, skills: Skill[]) {
    this._name = data.name;
    this.skills = Object.freeze([...skills].sort(Skill.compare));
  }

  static create(input: unknown): SkillCategory {
    const data = schema.parse(input);
    const skills = data.skills.map((s: unknown) => Skill.create(s));
    return new SkillCategory(data, skills);
  }

  get name(): string {
    return this._name;
  }
}

export const SKILL_CATEGORY_NAMES = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  AI: 'AI',
  Platform: 'Platform',
} as const;

export type SkillCategoryName = (typeof SKILL_CATEGORY_NAMES)[keyof typeof SKILL_CATEGORY_NAMES];

import { z } from 'zod';

export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name must not be empty'),
  image: z.string(),
  level: z.number().min(0).max(10, 'Skill level must be 0–10'),
});

export type SkillModel = z.infer<typeof skillSchema>;

export class Skill {
  private constructor(private readonly data: SkillModel) {}

  static create(input: unknown): Skill | undefined {
    const result = skillSchema.safeParse(input);
    return result.success ? new Skill(result.data) : undefined;
  }

  get name(): string {
    return this.data.name;
  }

  get image(): string {
    return this.data.image;
  }

  get level(): number {
    return this.data.level;
  }

  compareTo(other: Skill): number {
    return other.level - this.level;
  }

  static compare(a: Skill, b: Skill): number {
    return b.level - a.level;
  }
}

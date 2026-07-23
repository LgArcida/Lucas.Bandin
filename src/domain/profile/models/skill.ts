import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Skill name must not be empty'),
  image: z.string(),
  level: z.number().min(0).max(10, 'Skill level must be 0–10'),
});

type SkillData = z.infer<typeof schema>;

export class Skill {
  private constructor(private readonly data: SkillData) {}

  static create(input: unknown): Skill {
    return new Skill(schema.parse(input));
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

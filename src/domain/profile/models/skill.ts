import { z } from 'zod';
import { Technology, technologySchema } from '@domain/core/models/technology';

export const skillSchema = z.object({
  technology: technologySchema,
  level: z.number().min(0).max(10, 'Skill level must be 0–10'),
});

export type SkillModel = z.infer<typeof skillSchema>;

export class Skill {
  readonly #technology: Technology;

  private constructor(private readonly data: SkillModel) {
    this.#technology = Technology.create(data.technology);
  }

  static create(input: unknown): Skill {
    return new Skill(skillSchema.parse(input));
  }

  get name(): string {
    return this.#technology.name;
  }

  get image(): string {
    return this.#technology.image;
  }

  get level(): number {
    return this.data.level;
  }
}

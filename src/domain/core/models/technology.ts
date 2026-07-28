import { z } from 'zod';

export const technologySchema = z.object({
  name: z.string().min(1, 'Technology name must not be empty'),
  image: z.string(),
});

export type TechnologyModel = z.infer<typeof technologySchema>;

export class Technology {
  private constructor(private readonly data: TechnologyModel) {}

  static create(input: unknown): Technology {
    return new Technology(technologySchema.parse(input));
  }

  get name(): string {
    return this.data.name;
  }

  get image(): string {
    return this.data.image;
  }
}

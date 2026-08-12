import { z } from 'zod';

export const techHobbySchema = z.object({
  name: z.string().min(1, 'Hobby name must not be empty'),
  description: z.string().min(1, 'Hobby description must not be empty'),
  icon: z.string().min(1, 'Hobby icon must not be empty'),
});

export type TechHobbyModel = z.infer<typeof techHobbySchema>;

export class TechHobby {
  private constructor(private readonly data: TechHobbyModel) {}

  static create(input: unknown): TechHobby {
    return new TechHobby(techHobbySchema.parse(input));
  }

  get name(): string {
    return this.data.name;
  }

  get description(): string {
    return this.data.description;
  }

  get icon(): string {
    return this.data.icon;
  }
}

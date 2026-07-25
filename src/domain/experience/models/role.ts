import { z } from 'zod';

export const roleSchema = z.object({
  title: z.string().min(1, 'Role title must not be empty'),
  description: z.string().min(1, 'Role description must not be empty'),
});

export type RoleModel = z.infer<typeof roleSchema>;

export class Role {
  private constructor(private readonly data: RoleModel) {}

  static create(input: unknown): Role {
    return new Role(roleSchema.parse(input));
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }
}

import { z } from 'zod';
import { Period, periodSchema } from '@domain/core/models/period';
import { Technology, technologySchema } from '@domain/core/models/technology';

export const projectSchema = z.object({
  role: z.string().min(1, 'Role must not be empty'),
  company: z.string().min(1, 'Company must not be empty'),
  title: z.string().min(1, 'Project title must not be empty'),
  description: z.string().min(1, 'Project description must not be empty'),
  period: periodSchema,
  location: z.string().min(1, 'Location must not be empty'),
  highlights: z
    .array(z.string().min(1, 'Highlight must not be empty'))
    .min(1, 'At least one highlight is required'),
  technologies: z.array(technologySchema).min(1, 'At least one technology is required'),
  image: z.string().optional(),
  website: z.string().optional(),
});

export type ProjectModel = z.infer<typeof projectSchema>;

export class Project {
  readonly #period: Period;
  readonly #technologies: readonly Technology[];

  private constructor(private readonly data: ProjectModel) {
    this.#period = Period.create(data.period);
    this.#technologies = data.technologies.map((t) => Technology.create(t));
  }

  static create(input: unknown): Project {
    return new Project(projectSchema.parse(input));
  }

  get company(): string {
    return this.data.company;
  }

  get role(): string {
    return this.data.role;
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }

  get period(): Period {
    return this.#period;
  }

  get location(): string {
    return this.data.location;
  }

  get highlights(): readonly string[] {
    return this.data.highlights;
  }

  get technologies(): readonly Technology[] {
    return this.#technologies;
  }

  get image(): string | undefined {
    return this.data.image;
  }

  get website(): string | undefined {
    return this.data.website;
  }
}

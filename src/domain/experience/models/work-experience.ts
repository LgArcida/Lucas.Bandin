import { z } from 'zod';
import { Company, companySchema } from './company';
import { Role, roleSchema } from './role';
import { Period, periodSchema } from './period';
import { Highlight, highlightSchema } from './highlight';
import { Technology, technologySchema } from '@domain/core/models/technology';

export const workExperienceSchema = z.object({
  company: companySchema,
  role: roleSchema,
  period: periodSchema,
  highlights: z.array(highlightSchema).min(1, 'At least one highlight is required'),
  technologies: z.array(technologySchema).min(1, 'At least one technology is required'),
});

export type WorkExperienceModel = z.infer<typeof workExperienceSchema>;

export class WorkExperience {
  readonly #company: Company;
  readonly #role: Role;
  readonly #period: Period;
  readonly #highlights: readonly Highlight[];
  readonly #technologies: readonly Technology[];

  private constructor(data: WorkExperienceModel) {
    this.#company = Company.create(data.company);
    this.#role = Role.create(data.role);
    this.#period = Period.create(data.period);
    this.#highlights = data.highlights.map((h) => Highlight.create(h));
    this.#technologies = data.technologies.map((t) => Technology.create(t));
  }

  static create(input: unknown): WorkExperience {
    return new WorkExperience(workExperienceSchema.parse(input));
  }

  get company(): Company {
    return this.#company;
  }

  get role(): Role {
    return this.#role;
  }

  get period(): Period {
    return this.#period;
  }

  get highlights(): readonly Highlight[] {
    return this.#highlights;
  }

  get technologies(): readonly Technology[] {
    return this.#technologies;
  }
}

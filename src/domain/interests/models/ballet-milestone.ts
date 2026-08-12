import { z } from 'zod';
import { Period, periodSchema } from '@domain/core/models/period';

export const balletMilestoneSchema = z.object({
  venue: z.string().min(1, 'Venue must not be empty'),
  role: z.string().min(1, 'Role must not be empty'),
  period: periodSchema,
  location: z.string().min(1, 'Location must not be empty'),
  description: z.string().min(1, 'Description must not be empty'),
  highlights: z
    .array(z.string().min(1, 'Highlight must not be empty'))
    .min(1, 'At least one highlight is required'),
});

export type BalletMilestoneModel = z.infer<typeof balletMilestoneSchema>;

export class BalletMilestone {
  readonly #period: Period;

  private constructor(private readonly data: BalletMilestoneModel) {
    this.#period = Period.create(data.period);
  }

  static create(input: unknown): BalletMilestone {
    return new BalletMilestone(balletMilestoneSchema.parse(input));
  }

  get venue(): string {
    return this.data.venue;
  }

  get role(): string {
    return this.data.role;
  }

  get period(): Period {
    return this.#period;
  }

  get location(): string {
    return this.data.location;
  }

  get description(): string {
    return this.data.description;
  }

  get highlights(): readonly string[] {
    return this.data.highlights;
  }
}

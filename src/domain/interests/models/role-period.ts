import { z } from 'zod';
import { Period, periodSchema } from '@domain/core/models/period';

export const rolePeriodSchema = z.object({
  title: z.string().min(1, 'Title must not be empty'),
  period: periodSchema,
});

export type RolePeriodModel = z.infer<typeof rolePeriodSchema>;

export class RolePeriod {
  readonly #period: Period;

  private constructor(private readonly data: RolePeriodModel) {
    this.#period = Period.create(data.period);
  }

  static create(input: unknown): RolePeriod {
    return new RolePeriod(rolePeriodSchema.parse(input));
  }

  get title(): string {
    return this.data.title;
  }

  get period(): Period {
    return this.#period;
  }
}

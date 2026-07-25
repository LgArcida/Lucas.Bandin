import { z } from 'zod';

export const periodSchema = z
  .object({
    start: z.date(),
    end: z.date().optional(),
  })
  .refine((data) => data.end === undefined || data.end > data.start, {
    message: 'End date must be after start date',
  });

export type PeriodModel = z.infer<typeof periodSchema>;

export class Period {
  private constructor(private readonly data: PeriodModel) {}

  static create(input: unknown): Period {
    return new Period(periodSchema.parse(input));
  }

  get start(): Date {
    return this.data.start;
  }

  get end(): Date | undefined {
    return this.data.end;
  }

  get isCurrent(): boolean {
    return this.data.end === undefined;
  }
}

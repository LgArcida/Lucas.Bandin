import { DateTime } from 'luxon';
import { z } from 'zod';

const dateString = z.string().refine((val) => DateTime.fromISO(val).isValid, {
  message: 'Must be a valid ISO date string',
});

export const periodSchema = z
  .object({
    start: dateString,
    end: dateString.optional(),
  })
  .refine((data) => {
    if (data.end === undefined) return true;
    return DateTime.fromISO(data.end) > DateTime.fromISO(data.start);
  }, { message: 'End date must be after start date' });

export type PeriodModel = z.infer<typeof periodSchema>;

export class Period {
  readonly #start: DateTime;
  readonly #end: DateTime | undefined;

  private constructor(private readonly data: PeriodModel) {
    this.#start = DateTime.fromISO(data.start);
    this.#end = data.end ? DateTime.fromISO(data.end) : undefined;
  }

  static create(input: unknown): Period {
    return new Period(periodSchema.parse(input));
  }

  get start(): DateTime {
    return this.#start;
  }

  get end(): DateTime | undefined {
    return this.#end;
  }

  get isCurrent(): boolean {
    return this.#end === undefined;
  }
}

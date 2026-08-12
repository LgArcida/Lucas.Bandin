import { z } from 'zod';
import { Period, periodSchema } from '@domain/core/models/period';

export const educationEntrySchema = z.object({
  institution: z.string().min(1, 'Institution must not be empty'),
  degree: z.string().min(1, 'Degree must not be empty'),
  period: periodSchema,
  location: z.string().min(1, 'Location must not be empty'),
  description: z.string().min(1, 'Description must not be empty'),
  highlights: z
    .array(z.string().min(1, 'Highlight must not be empty'))
    .min(1, 'At least one highlight is required'),
  image: z.string().optional(),
  website: z.string().optional(),
});

export type EducationModel = z.infer<typeof educationEntrySchema>;

export class Education {
  readonly #period: Period;

  private constructor(private readonly data: EducationModel) {
    this.#period = Period.create(data.period);
  }

  static create(input: unknown): Education {
    return new Education(educationEntrySchema.parse(input));
  }

  get institution(): string {
    return this.data.institution;
  }

  get degree(): string {
    return this.data.degree;
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

  get image(): string | undefined {
    return this.data.image;
  }

  get website(): string | undefined {
    return this.data.website;
  }
}

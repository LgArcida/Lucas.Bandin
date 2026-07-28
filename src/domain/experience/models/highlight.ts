import { z } from 'zod';

export const highlightSchema = z.object({
  title: z.string().min(1, 'Highlight title must not be empty'),
  description: z.string().min(1, 'Highlight description must not be empty'),
});

export type HighlightModel = z.infer<typeof highlightSchema>;

export class Highlight {
  private constructor(private readonly data: HighlightModel) {}

  static create(input: unknown): Highlight {
    return new Highlight(highlightSchema.parse(input));
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }
}

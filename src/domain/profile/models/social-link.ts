import { z } from 'zod';

export const socialLinkSchema = z.object({
  name: z.string().min(1, 'Social link name must not be empty'),
  url: z.url('Social link must be a valid URL'),
  icon: z.string().min(1, 'Social link icon must not be empty'),
});

export type SocialLinkModel = z.infer<typeof socialLinkSchema>;

export class SocialLink {
  private constructor(private readonly data: SocialLinkModel) {}

  static create(input: unknown): SocialLink {
    return new SocialLink(socialLinkSchema.parse(input));
  }

  get name(): string {
    return this.data.name;
  }

  get url(): string {
    return this.data.url;
  }

  get icon(): string {
    return this.data.icon;
  }
}

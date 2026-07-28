import { z } from 'zod';

export const companySchema = z.object({
  name: z.string().min(1, 'Company name must not be empty'),
  logo: z.string().min(1, 'Company logo must not be empty'),
  website: z.string(),
  location: z.string().min(1, 'Location must not be empty'),
});

export type CompanyModel = z.infer<typeof companySchema>;

export class Company {
  private constructor(private readonly data: CompanyModel) {}

  static create(input: unknown): Company {
    return new Company(companySchema.parse(input));
  }

  get name(): string {
    return this.data.name;
  }

  get logo(): string {
    return this.data.logo;
  }

  get website(): string {
    return this.data.website;
  }

  get location(): string {
    return this.data.location;
  }
}

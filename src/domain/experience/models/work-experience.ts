import { z } from 'zod';
import { companySchema, type CompanyModel } from './company';
import { roleSchema, type RoleModel } from './role';
import { periodSchema, type PeriodModel } from './period';
import { highlightSchema, type HighlightModel } from './highlight';
import { skillSchema, type SkillModel } from '@domain/profile/models/skill';

export const workExperienceSchema = z.object({
  company: companySchema,
  role: roleSchema,
  period: periodSchema,
  highlights: z.array(highlightSchema).min(1, 'At least one highlight is required'),
  technologies: z.array(skillSchema).min(1, 'At least one technology is required'),
});

export type WorkExperienceModel = z.infer<typeof workExperienceSchema>;

export class WorkExperience {
  private constructor(private readonly data: WorkExperienceModel) {}

  static create(input: unknown): WorkExperience {
    return new WorkExperience(workExperienceSchema.parse(input));
  }

  get company(): CompanyModel {
    return this.data.company;
  }

  get role(): RoleModel {
    return this.data.role;
  }

  get period(): PeriodModel {
    return this.data.period;
  }

  get highlights(): readonly HighlightModel[] {
    return this.data.highlights;
  }

  get technologies(): readonly SkillModel[] {
    return this.data.technologies;
  }
}
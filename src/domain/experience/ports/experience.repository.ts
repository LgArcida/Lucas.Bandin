import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import type { WorkExperience } from '../models/work-experience';

export type ExperienceRepository = {
  getExperiences(): Observable<readonly WorkExperience[]>;
};

export const EXPERIENCE_REPOSITORY = new InjectionToken<ExperienceRepository>(
  'ExperienceRepository',
);

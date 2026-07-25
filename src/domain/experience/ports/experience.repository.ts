import { Observable } from 'rxjs';
import type { WorkExperience } from '../models/work-experience';

export type ExperienceRepository = {
  getExperiences(): Observable<readonly WorkExperience[]>;
};

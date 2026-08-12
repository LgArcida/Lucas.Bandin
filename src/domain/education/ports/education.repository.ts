import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import type { Education } from '../models/education';

export type EducationRepository = {
  getEducationEntries(): Observable<readonly Education[]>;
};

export const EDUCATION_REPOSITORY = new InjectionToken<EducationRepository>('EducationRepository');

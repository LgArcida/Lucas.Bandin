import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import type { BalletMilestone } from '../models/ballet-milestone';
import type { TechHobby } from '../models/tech-hobby';

export type InterestsRepository = {
  getBalletMilestones(): Observable<readonly BalletMilestone[]>;
  getTechHobbies(): Observable<readonly TechHobby[]>;
};

export const INTERESTS_REPOSITORY = new InjectionToken<InterestsRepository>('InterestsRepository');

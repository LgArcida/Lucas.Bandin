import { Observable } from 'rxjs';
import type { SkillCategory } from '../models/skill-category';

export type ProfileRepository = {
  getSkills(): Observable<SkillCategory[]>;
};

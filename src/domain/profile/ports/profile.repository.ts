import { Observable } from 'rxjs';
import type { SkillCategory } from '../models/skill-category';
import type { SocialLink } from '../models/social-link';

export type ProfileRepository = {
  getSkills(): Observable<readonly SkillCategory[]>;
  getSocials(): Observable<readonly SocialLink[]>;
};

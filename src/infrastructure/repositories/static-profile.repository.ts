import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { SkillCategory, SKILL_CATEGORY_NAMES } from '@domain/profile/models/skill-category';
import { SocialLink } from '@domain/profile/models/social-link';
import { TECHNOLOGIES } from '../data/technologies';
import { SOCIAL_DATA } from '@infrastructure/data/social';

const findTechnology = (name: string) => TECHNOLOGIES.find((x) => x.name === name)!;

const FRONTEND_SKILLS = [
  { technology: findTechnology('Angular'), level: 9.5 },
  { technology: findTechnology('TypeScript'), level: 9 },
  { technology: findTechnology('RxJS'), level: 8.5 },
  { technology: findTechnology('Ionic'), level: 8.5 },
  { technology: findTechnology('Capacitor'), level: 8 },
  { technology: findTechnology('JavaScript'), level: 8 },
  { technology: findTechnology('HTML'), level: 8 },
  { technology: findTechnology('CSS'), level: 7.5 },
  { technology: findTechnology('React'), level: 3 },
];

const BACKEND_SKILLS = [
  { technology: findTechnology('Python'), level: 6 },
  { technology: findTechnology('Django'), level: 5.5 },
  { technology: findTechnology('Firebase'), level: 5 },
  { technology: findTechnology('SQLite'), level: 5.5 },
];

const AI_SKILLS = [
  { technology: findTechnology('Claude'), level: 6 },
  { technology: findTechnology('Opencode'), level: 6 },
  { technology: findTechnology('Codex'), level: 6 },
  { technology: findTechnology('LangGraph'), level: 3 },
  { technology: findTechnology('LangChain'), level: 3 },
];

const PLATFORM_SKILLS = [
  { technology: findTechnology('Git'), level: 8 },
  { technology: findTechnology('Nx'), level: 5 },
  { technology: findTechnology('Electron'), level: 4.5 },
  { technology: findTechnology('Android'), level: 6 },
  { technology: findTechnology('Linux'), level: 8 },
  { technology: findTechnology('PWA'), level: 7 },
];

const buildCategories = (): readonly SkillCategory[] => {
  return [
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Frontend, skills: FRONTEND_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Backend, skills: BACKEND_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.AI, skills: AI_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Platform, skills: PLATFORM_SKILLS }),
  ];
};

const buildSocial = (): readonly SocialLink[] => SOCIAL_DATA.map((item) => SocialLink.create(item));

export class StaticProfileRepository implements ProfileRepository {
  readonly #skills$ = new BehaviorSubject<readonly SkillCategory[]>(buildCategories());
  readonly #socials$ = new BehaviorSubject<readonly SocialLink[]>(buildSocial());

  getSkills(): Observable<readonly SkillCategory[]> {
    return this.#skills$.asObservable();
  }

  getSocials(): Observable<readonly SocialLink[]> {
    return this.#socials$.asObservable();
  }
}

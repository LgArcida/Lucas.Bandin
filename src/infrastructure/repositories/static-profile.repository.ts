import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { SkillCategory, SKILL_CATEGORY_NAMES } from '@domain/profile/models/skill-category';
import { SocialLink } from '@domain/profile/models/social-link';

const FRONTEND_SKILLS = [
  { technology: { name: 'Angular', image: 'angular.webp' }, level: 9.5 },
  { technology: { name: 'TypeScript', image: 'typescript.webp' }, level: 9 },
  { technology: { name: 'RxJS', image: 'rxjs.webp' }, level: 8.5 },
  { technology: { name: 'Ionic', image: 'ionic.webp' }, level: 8.5 },
  { technology: { name: 'Capacitor', image: 'capacitor.webp' }, level: 8 },
  { technology: { name: 'JavaScript', image: 'javascript.webp' }, level: 8 },
  { technology: { name: 'HTML', image: 'html.webp' }, level: 8 },
  { technology: { name: 'CSS', image: 'css.webp' }, level: 7.5 },
  { technology: { name: 'React', image: 'react.webp' }, level: 3 },
];

const BACKEND_SKILLS = [
  { technology: { name: 'Python', image: 'python.webp' }, level: 6 },
  { technology: { name: 'Django', image: 'django.webp' }, level: 5.5 },
  { technology: { name: 'Firebase', image: 'firebase.webp' }, level: 5 },
  { technology: { name: 'SQLite', image: 'sqlite.webp' }, level: 5.5 },
];

const AI_SKILLS = [
  { technology: { name: 'Claude', image: 'claude.webp' }, level: 6 },
  { technology: { name: 'Opencode', image: 'opencode.webp' }, level: 6 },
  { technology: { name: 'Codex', image: 'codex.webp' }, level: 6 },
  { technology: { name: 'LangGraph', image: 'langgraph.webp' }, level: 3 },
  { technology: { name: 'LangChain', image: 'langchain.webp' }, level: 3 },
];

const PLATFORM_SKILLS = [
  { technology: { name: 'Git', image: 'git.webp' }, level: 8 },
  { technology: { name: 'Nx', image: 'nx.webp' }, level: 5 },
  { technology: { name: 'Electron', image: 'electron.webp' }, level: 4.5 },
  { technology: { name: 'Android', image: 'android.webp' }, level: 6 },
  { technology: { name: 'Linux', image: 'linux.webp' }, level: 8 },
  { technology: { name: 'PWA', image: 'pwa.webp' }, level: 7 },
];

const buildCategories = (): readonly SkillCategory[] => {
  return [
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Frontend, skills: FRONTEND_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Backend, skills: BACKEND_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.AI, skills: AI_SKILLS }),
    SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Platform, skills: PLATFORM_SKILLS }),
  ];
};

const SOCIAL_LINKS: readonly SocialLink[] = [
  SocialLink.create({ name: 'Reddit',    url: 'https://placeholder.reddit',  icon: 'reddit.svg' }),
  SocialLink.create({ name: 'LinkedIn',  url: 'https://placeholder.linkedin', icon: 'linkedin.svg' }),
  SocialLink.create({ name: 'Facebook',  url: 'https://placeholder.facebook', icon: 'facebook.svg' }),
];

export class StaticProfileRepository implements ProfileRepository {
  readonly #skills$ = new BehaviorSubject<readonly SkillCategory[]>(buildCategories());
  readonly #socials$ = new BehaviorSubject<readonly SocialLink[]>(SOCIAL_LINKS);

  getSkills(): Observable<readonly SkillCategory[]> {
    return this.#skills$.asObservable();
  }

  getSocials(): Observable<readonly SocialLink[]> {
    return this.#socials$.asObservable();
  }
}
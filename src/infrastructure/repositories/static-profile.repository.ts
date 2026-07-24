import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileRepository } from '@domain/profile/ports/profile.repository';
import { SkillCategory, SKILL_CATEGORY_NAMES } from '@domain/profile/models/skill-category';

const FRONTEND_SKILLS = [
  { name: 'Angular', image: 'angular.webp', level: 9.5 },
  { name: 'TypeScript', image: 'typescript.webp', level: 9 },
  { name: 'RxJS', image: 'rxjs.webp', level: 8.5 },
  { name: 'Ionic', image: 'ionic.webp', level: 8.5 },
  { name: 'Capacitor', image: 'capacitor.webp', level: 8 },
  { name: 'JavaScript', image: 'javascript.webp', level: 8 },
  { name: 'HTML', image: 'html.webp', level: 8 },
  { name: 'CSS', image: 'css.webp', level: 7.5 },
  { name: 'React', image: 'react.webp', level: 3 },
];

const BACKEND_SKILLS = [
  { name: 'Python', image: 'python.webp', level: 6 },
  { name: 'Django', image: 'django.webp', level: 5.5 },
  { name: 'Firebase', image: 'firebase.webp', level: 5 },
  { name: 'SQLite', image: 'sqlite.webp', level: 5.5 },
];

const AI_SKILLS = [
  { name: 'Claude', image: 'claude.webp', level: 6 },
  { name: 'Opencode', image: 'opencode.webp', level: 6 },
  { name: 'Codex', image: 'codex.webp', level: 6 },
  { name: 'LangGraph', image: 'langgraph.webp', level: 3 },
  { name: 'LangChain', image: 'langchain.webp', level: 3 },
];

const PLATFORM_SKILLS = [
  { name: 'Git', image: 'git.webp', level: 8 },
  { name: 'Nx', image: 'nx.webp', level: 5 },
  { name: 'Electron', image: 'electron.webp', level: 4.5 },
  { name: 'Android', image: 'android.webp', level: 6 },
  { name: 'Linux', image: 'linux.webp', level: 8 },
  { name: 'PWA', image: 'pwa.webp', level: 7 },
];

const buildCategories = (): SkillCategory[] => {
  return [
      SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Frontend, skills: FRONTEND_SKILLS }),
      SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Backend, skills: BACKEND_SKILLS }),
      SkillCategory.create({ name: SKILL_CATEGORY_NAMES.AI, skills: AI_SKILLS }),
      SkillCategory.create({ name: SKILL_CATEGORY_NAMES.Platform, skills: PLATFORM_SKILLS }),
  ];
};

export class StaticProfileRepository implements ProfileRepository {
  readonly #skills$ = new BehaviorSubject<SkillCategory[]>(buildCategories());

  getSkills(): Observable<SkillCategory[]> {
    return this.#skills$.asObservable();
  }
}

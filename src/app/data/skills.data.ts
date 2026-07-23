export type Skill = {
  name: string;
  image: string;
  level: number;
};

export const skillSort = (a: Skill, b: Skill) => (b.level ?? 0) - (a.level ?? 0);

export const FRONTEND_SKILLS: Skill[] = [
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

export const BACKEND_SKILLS: Skill[] = [
  { name: 'Python', image: 'python.webp', level: 6 },
  { name: 'Django', image: 'django.webp', level: 5.5 },
  { name: 'Firebase', image: 'firebase.webp', level: 5 },
  { name: 'SQLite', image: 'sqlite.webp', level: 5.5 },
];

export const AI_SKILLS: Skill[] = [
  { name: 'Claude', image: 'claude.webp', level: 6 },
  { name: 'Opencode', image: 'opencode.webp', level: 6 },
  { name: 'Codex', image: 'codex.webp', level: 6 },
  { name: 'LangGraph', image: 'langgraph.webp', level: 3 },
  { name: 'LangChain', image: 'langchain.webp', level: 3 },
];

export const PLATFORM_SKILLS: Skill[] = [
  { name: 'Git', image: 'git.webp', level: 8 },
  { name: 'Nx', image: 'nx.webp', level: 5 },
  { name: 'Electron', image: 'electron.webp', level: 4.5 },
  { name: 'Android', image: 'android.webp', level: 6 },
  { name: 'Linux', image: 'linux.webp', level: 8 },
  { name: 'PWA', image: 'pwa.webp', level: 7 },
];

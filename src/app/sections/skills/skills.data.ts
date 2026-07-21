export interface Skill {
  name: string;
  image: string;
  level: number;
}

export const SKILLS: Skill[] = [
  { name: 'Angular', image: 'angular.png', level: 9 },
  { name: 'Ionic', image: 'ionic.png', level: 8 },
  { name: 'Capacitor', image: 'capacitor.png', level: 7.5 },
  { name: 'TypeScript', image: 'typescript.png', level: 8 },
  { name: 'JavaScript', image: 'javascript.png', level: 8 },
  { name: 'HTML', image: 'html.png', level: 9 },
  { name: 'CSS', image: 'css.png', level: 8 },
  { name: 'Django', image: 'django.png', level: 6 },
  { name: 'Firebase', image: 'firebase.png', level: 5.5 },
  { name: 'LangChain', image: 'lang.png', level: 3 },
  { name: 'Python', image: 'python.png', level: 6 },
  { name: 'Claude', image: 'claude.png', level: 7 },
  { name: 'Git', image: 'git.png', level: 7 },
  { name: 'Nx', image: 'nx.png', level: 5 },
  { name: 'React', image: 'react.png', level: 3 },
  { name: 'SQLite', image: 'sqlite.png', level: 5 },
];

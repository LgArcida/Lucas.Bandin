export interface Skill {
  name: string;
  image: string;
  level: number;
}

export const CORE_SKILLS: Skill[] = [
  { name: 'Angular', image: 'angular.webp', level: 9.5 },
  { name: 'TypeScript', image: 'typescript.webp', level: 9 },
  { name: 'RxJS', image: 'rxjs.webp', level: 8.5 },
  { name: 'Ionic', image: 'ionic.webp', level: 8.5 },
  { name: 'Capacitor', image: 'capacitor.webp', level: 8 },
  { name: 'JavaScript', image: 'javascript.webp', level: 8 },
  { name: 'HTML', image: 'html.webp', level: 8 },
  { name: 'CSS', image: 'css.webp', level: 7.5 },
  { name: 'Git', image: 'git.webp', level: 8 },
  { name: 'SQLite', image: 'sqlite.webp', level: 6.5 },
  { name: 'Nx', image: 'nx.webp', level: 6 },
  { name: 'Python', image: 'python.webp', level: 6 },
  { name: 'Django', image: 'django.webp', level: 5.5 },
  { name: 'Firebase', image: 'firebase.webp', level: 5.5 },
  { name: 'React', image: 'react.webp', level: 4 },
];

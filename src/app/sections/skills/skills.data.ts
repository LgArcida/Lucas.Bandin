export interface Skill {
  name: string;
  image: string;
  level: number;
}

export const CORE_SKILLS: Skill[] = [
  { name: 'Angular', image: 'angular.png', level: 9.5 },
  { name: 'TypeScript', image: 'typescript.png', level: 9 },
  { name: 'RxJS', image: 'rxjs.png', level: 8.5 },
  { name: 'Ionic', image: 'ionic.png', level: 8.5 },
  { name: 'Capacitor', image: 'capacitor.png', level: 8 },
  { name: 'JavaScript', image: 'javascript.png', level: 8 },
  { name: 'HTML', image: 'html.png', level: 8 },
  { name: 'CSS', image: 'css.png', level: 7.5 },
  { name: 'Git', image: 'git.png', level: 8 },
  { name: 'SQLite', image: 'sqlite.png', level: 6.5 },
  { name: 'Nx', image: 'nx.png', level: 6 },
  { name: 'Python', image: 'python.png', level: 6 },
  { name: 'Django', image: 'django.png', level: 5.5 },
  { name: 'Firebase', image: 'firebase.png', level: 5.5 },
  { name: 'React', image: 'react.png', level: 4 },
];

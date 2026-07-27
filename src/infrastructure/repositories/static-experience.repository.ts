import { BehaviorSubject, Observable } from 'rxjs';
import { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import { WorkExperience } from '@domain/experience/models/work-experience';

const EXPERIENCES: readonly WorkExperience[] = [
  WorkExperience.create({
    company: {
      name: 'Placeholder Company',
      logo: 'placeholder.svg',
      website: 'https://placeholder.com',
      location: 'Remote',
    },
    role: {
      title: 'Software Engineer',
      description: 'A brief description of the role and responsibilities.',
    },
    period: {
      start: '2020-01-01',
      end: '2022-06-01',
    },
    highlights: [
      { title: 'Built feature X', description: 'Led the development of a new feature from concept to production.' },
      { title: 'Improved performance', description: 'Reduced page load time by 40% through code optimizations.' },
    ],
    technologies: [
      { name: 'Angular', image: 'angular.webp', level: 9 },
      { name: 'TypeScript', image: 'typescript.webp', level: 8 },
    ],
  }),
];

export class StaticExperienceRepository implements ExperienceRepository {
  readonly #experiences$ = new BehaviorSubject<readonly WorkExperience[]>(EXPERIENCES);

  getExperiences(): Observable<readonly WorkExperience[]> {
    return this.#experiences$.asObservable();
  }
}

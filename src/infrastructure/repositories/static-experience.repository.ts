import { BehaviorSubject, Observable } from 'rxjs';
import { ExperienceRepository } from '@domain/experience/ports/experience.repository';
import { WorkExperience } from '@domain/experience/models/work-experience';

const EXPERIENCES: readonly WorkExperience[] = [
  WorkExperience.create({
    company: {
      name: 'Dualog Fisknett AS',
      logo: 'dualog.webp',
      website: 'https://dualog.com',
      location: 'La Paz, Bolivia / Tromsø, Norway',
    },
    role: {
      title: 'Senior Frontend Engineer',
      description:
        'Primary frontend engineer responsible for the long-term evolution and maintainability of Fangstr, a cross-platform application used by 2,000+ users across 80% of the Norwegian fisheries market.',
    },
    period: {
      start: '2020-01-01',
      end: '2026-06-01',
    },
    highlights: [
      {
        title: 'Frontend evolution from prototype to production',
        description:
          'Led the frontend evolution from prototype to production, delivering Android, iOS, Windows, Linux, and Web applications.',
      },
      {
        title: 'Offline-first workflow and VMS integration',
        description:
          'Designed the offline-first workflow and VMS integration using Bluetooth and Iridium satellite communications for reliable reporting in low-connectivity environments.',
      },
      {
        title: 'Satellite communication protocols',
        description:
          'Designed communication protocols for fragmented satellite messages, including synchronization, validation, recovery, and message reassembly.',
      },
      {
        title: 'ERS modular refactoring',
        description:
          'Refactored the Electronic Reporting System (ERS) into modular domain workflows, simplifying regulatory changes and reducing long-term maintenance.',
      },
      {
        title: 'Angular modernization and team-wide patterns',
        description:
          'Modernized the application across multiple Angular versions, reducing technical debt while standardizing Angular patterns, introducing reusable modules, improving code reviews, and reducing duplicated code across an 8-person team.',
      },
    ],
    technologies: [
      { name: 'Angular', image: '' },
      { name: 'TypeScript', image: '' },
      { name: 'RxJS', image: '' },
      { name: 'Ionic', image: '' },
      { name: 'Capacitor', image: '' },
      { name: 'SQLite', image: '' },
      { name: 'Bluetooth', image: '' },
      { name: 'Iridium Satellite', image: '' },
    ],
  }),
];

export class StaticExperienceRepository implements ExperienceRepository {
  readonly #experiences$ = new BehaviorSubject<readonly WorkExperience[]>(EXPERIENCES);

  getExperiences(): Observable<readonly WorkExperience[]> {
    return this.#experiences$.asObservable();
  }
}

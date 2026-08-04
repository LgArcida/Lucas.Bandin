import { TECHNOLOGIES } from './technologies';

const findTechnology = (name: string) =>
  TECHNOLOGIES.find((x) => x.name === name) ?? { name, image: '' };

export const EXPERIENCES_DATA = [
  {
    company: {
      name: 'Dualog Fisknett AS',
      logo: 'dualog.webp',
      website: 'https://dualog.com',
      location: 'La Paz, Bolivia / Tromsø, Norway',
    },
    role: {
      title: 'Senior Frontend Engineer',
      description:
        'Primary frontend engineer responsible for the long-term evolution and maintainability of Fangstr, a cross-platform application used by thousands of users across 80% of the Norwegian fisheries market.',
    },
    period: {
      start: '2020-01-01',
      end: '2026-06-01',
    },
    highlights: [
      {
        title: 'Evolution',
        description:
          'From prototype to production, delivering Android, iOS, Windows, Linux, and Web applications.',
      },
      {
        title: 'Offline-first and VMS integration',
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
        title: 'Modernization and team-wide patterns',
        description:
          'Modernized the application across multiple Angular versions, reducing technical debt while standardizing Angular patterns, introducing reusable modules, improving code reviews, and reducing duplicated code across an 8-person team.',
      },
    ],
    technologies: [
      findTechnology('Angular'),
      findTechnology('TypeScript'),
      findTechnology('RxJS'),
      findTechnology('Ionic'),
      findTechnology('Capacitor'),
      findTechnology('SQLite'),
      findTechnology('Bluetooth'),
      findTechnology('Iridium Satellite'),
    ],
  },
  {
    company: {
      name: 'Clono AS',
      logo: 'clono.webp',
      website: 'https://clono.no/',
      location: 'La Paz, Bolivia / Tromsø, Norway',
    },
    role: {
      title: 'Lead Software Engineer',
      description:
        'Technical lead for Clono Chess System, the official platform used in FIDE tournaments worldwide. (Side Project)',
    },
    period: {
      start: '2017-01-01',
    },
    highlights: [
      {
        title: 'Offline-first reliability and battery efficiency',
        description:
          'Evolved the Android and web applications with a strong focus on reliability, offline-first operation, and battery efficiency.',
      },
      {
        title: 'Tournament synchronization system',
        description:
          'Designed the synchronization between chess clocks, notation devices, administration tools, and live broadcasting systems.',
      },
      {
        title: 'FIDE-compliant Chess.js extension',
        description: 'Extended Chess.js to support FIDE-specific tournament requirements.',
      },
      {
        title: 'Legacy backend migration',
        description: 'Leading the migration of the legacy PHP backend to Python/Django.',
      },
    ],
    technologies: [
      findTechnology('Angular'),
      findTechnology('Capacitor'),
      findTechnology('Android'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('Chess.js'),
    ],
  },
];

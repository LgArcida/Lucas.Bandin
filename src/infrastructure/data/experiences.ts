import { TECHNOLOGIES } from './technologies';
import { Translations } from '@i18n/translations';

const COMPANIES = Translations.EXPERIENCE.COMPANIES;
const findTechnology = (name: string) =>
  TECHNOLOGIES.find((x) => x.name === name) ?? { name, image: '' };
type HighlightKeys = (typeof COMPANIES)[keyof typeof COMPANIES]['HIGHLIGHTS'][number];

const listHighlights = (highlights: readonly HighlightKeys[]) =>
  highlights.map((h) => ({
    title: h.TITLE,
    description: h.DESCRIPTION,
  }));

export const EXPERIENCES_DATA = [
  {
    company: {
      name: 'Dualog Fisknett AS',
      logo: 'dualog.webp',
      website: 'https://dualog.com',
      location: COMPANIES.DUALOG.LOCATION,
    },
    role: {
      title: COMPANIES.DUALOG.ROLE_TITLE,
      description: COMPANIES.DUALOG.ROLE_DESCRIPTION,
    },
    period: {
      start: '2020-01-01',
      end: '2026-06-01',
    },
    highlights: listHighlights(COMPANIES.DUALOG.HIGHLIGHTS),
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
      location: COMPANIES.CLONO.LOCATION,
    },
    role: {
      title: COMPANIES.CLONO.ROLE_TITLE,
      description: COMPANIES.CLONO.ROLE_DESCRIPTION,
    },
    period: {
      start: '2017-01-01',
    },
    highlights: listHighlights(COMPANIES.CLONO.HIGHLIGHTS),
    technologies: [
      findTechnology('Angular'),
      findTechnology('Capacitor'),
      findTechnology('Android'),
      findTechnology('TypeScript'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('SQLite'),
      findTechnology('Chess.js'),
    ],
  },
  {
    company: {
      name: "Cutter's Club",
      logo: 'cutters_club.webp',
      website: 'https://cuttersclub.com/',
      location: COMPANIES.CUTTERS_CLUB.LOCATION,
    },
    role: {
      title: COMPANIES.CUTTERS_CLUB.ROLE_TITLE,
      description: COMPANIES.CUTTERS_CLUB.ROLE_DESCRIPTION,
    },
    period: {
      start: '2019-01-01',
      end: '2020-12-31',
    },
    highlights: listHighlights(COMPANIES.CUTTERS_CLUB.HIGHLIGHTS),
    technologies: [
      findTechnology('React'),
      findTechnology('Expo'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('CI/CD'),
      findTechnology('Monitoring'),
    ],
  },
  {
    company: {
      name: COMPANIES.CONSULTING.NAME,
      logo: 'www.webp',
      website: '',
      location: COMPANIES.CONSULTING.LOCATION,
    },
    role: {
      title: COMPANIES.CONSULTING.ROLE_TITLE,
      description: COMPANIES.CONSULTING.ROLE_DESCRIPTION,
    },
    period: {
      start: '2016-03-01',
      end: '2019-12-31',
    },
    highlights: listHighlights(COMPANIES.CONSULTING.HIGHLIGHTS),
    technologies: [
      findTechnology('Angular'),
      findTechnology('React'),
      findTechnology('TypeScript'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('PostgreSQL'),
      findTechnology('CI/CD'),
    ],
  },
  {
    company: {
      name: 'Rapid Instinct',
      logo: 'rapid_instinct.webp',
      website: '',
      location: COMPANIES.RAPID_INSTINCT.LOCATION,
    },
    role: {
      title: COMPANIES.RAPID_INSTINCT.ROLE_TITLE,
      description: COMPANIES.RAPID_INSTINCT.ROLE_DESCRIPTION,
    },
    period: {
      start: '2015-12-01',
      end: '2016-03-31',
    },
    highlights: listHighlights(COMPANIES.RAPID_INSTINCT.HIGHLIGHTS),
    technologies: [findTechnology('Angular'), findTechnology('PostgreSQL')],
  },
  {
    company: {
      name: 'CodeRoad / Mojix — Xtime',
      logo: 'coderoad.webp',
      website: '',
      location: COMPANIES.CODEROAD.LOCATION,
    },
    role: {
      title: COMPANIES.CODEROAD.ROLE_TITLE,
      description: COMPANIES.CODEROAD.ROLE_DESCRIPTION,
    },
    period: {
      start: '2013-02-01',
      end: '2015-11-30',
    },
    highlights: listHighlights(COMPANIES.CODEROAD.HIGHLIGHTS),
    technologies: [
      findTechnology('Sencha'),
      findTechnology('Ext JS'),
      findTechnology('JavaScript'),
      findTechnology('HTML'),
      findTechnology('CSS'),
    ],
  },
];

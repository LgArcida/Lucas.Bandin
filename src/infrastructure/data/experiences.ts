import { TECHNOLOGIES } from './technologies';

const findTechnology = (name: string) =>
  TECHNOLOGIES.find((x) => x.name === name) ?? { name, image: '' };

const KEY = 'EXPERIENCE.COMPANIES';

export const EXPERIENCES_DATA = [
  {
    company: {
      name: 'Dualog Fisknett AS',
      logo: 'dualog.webp',
      website: 'https://dualog.com',
      location: `${KEY}.DUALOG.LOCATION`,
    },
    role: {
      title: `${KEY}.DUALOG.ROLE_TITLE`,
      description: `${KEY}.DUALOG.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2020-01-01',
      end: '2026-06-01',
    },
    highlights: [
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.2.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.3.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.3.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.4.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.4.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.5.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.5.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.6.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.6.DESCRIPTION`,
      },
      {
        title: `${KEY}.DUALOG.HIGHLIGHTS.7.TITLE`,
        description: `${KEY}.DUALOG.HIGHLIGHTS.7.DESCRIPTION`,
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
      location: `${KEY}.CLONO.LOCATION`,
    },
    role: {
      title: `${KEY}.CLONO.ROLE_TITLE`,
      description: `${KEY}.CLONO.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2017-01-01',
    },
    highlights: [
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.2.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.3.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.3.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.4.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.4.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.5.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.5.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.6.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.6.DESCRIPTION`,
      },
      {
        title: `${KEY}.CLONO.HIGHLIGHTS.7.TITLE`,
        description: `${KEY}.CLONO.HIGHLIGHTS.7.DESCRIPTION`,
      },
    ],
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
      location: `${KEY}.CUTTERS_CLUB.LOCATION`,
    },
    role: {
      title: `${KEY}.CUTTERS_CLUB.ROLE_TITLE`,
      description: `${KEY}.CUTTERS_CLUB.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2019-01-01',
      end: '2020-12-31',
    },
    highlights: [
      {
        title: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.2.DESCRIPTION`,
      },
      {
        title: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.3.TITLE`,
        description: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.3.DESCRIPTION`,
      },
      {
        title: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.4.TITLE`,
        description: `${KEY}.CUTTERS_CLUB.HIGHLIGHTS.4.DESCRIPTION`,
      },
    ],
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
      name: `${KEY}.CONSULTING.NAME`,
      logo: 'www.webp',
      website: '',
      location: `${KEY}.CONSULTING.LOCATION`,
    },
    role: {
      title: `${KEY}.CONSULTING.ROLE_TITLE`,
      description: `${KEY}.CONSULTING.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2016-03-01',
      end: '2019-12-31',
    },
    highlights: [
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.2.DESCRIPTION`,
      },
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.3.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.3.DESCRIPTION`,
      },
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.4.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.4.DESCRIPTION`,
      },
      {
        title: `${KEY}.CONSULTING.HIGHLIGHTS.5.TITLE`,
        description: `${KEY}.CONSULTING.HIGHLIGHTS.5.DESCRIPTION`,
      },
    ],
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
      location: `${KEY}.RAPID_INSTINCT.LOCATION`,
    },
    role: {
      title: `${KEY}.RAPID_INSTINCT.ROLE_TITLE`,
      description: `${KEY}.RAPID_INSTINCT.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2015-12-01',
      end: '2016-03-31',
    },
    highlights: [
      {
        title: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.RAPID_INSTINCT.HIGHLIGHTS.2.DESCRIPTION`,
      },
    ],
    technologies: [findTechnology('Angular'), findTechnology('PostgreSQL')],
  },
  {
    company: {
      name: 'CodeRoad / Mojix — Xtime',
      logo: 'coderoad.webp',
      website: '',
      location: `${KEY}.CODEROAD.LOCATION`,
    },
    role: {
      title: `${KEY}.CODEROAD.ROLE_TITLE`,
      description: `${KEY}.CODEROAD.ROLE_DESCRIPTION`,
    },
    period: {
      start: '2013-02-01',
      end: '2015-11-30',
    },
    highlights: [
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.0.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.0.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.1.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.1.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.2.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.2.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.3.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.3.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.4.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.4.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.5.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.5.DESCRIPTION`,
      },
      {
        title: `${KEY}.CODEROAD.HIGHLIGHTS.6.TITLE`,
        description: `${KEY}.CODEROAD.HIGHLIGHTS.6.DESCRIPTION`,
      },
    ],
    technologies: [
      findTechnology('Sencha'),
      findTechnology('Ext JS'),
      findTechnology('JavaScript'),
      findTechnology('HTML'),
      findTechnology('CSS'),
    ],
  },
];

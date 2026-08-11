import { findTechnology } from './technologies';
import { Translations } from '@i18n/translations';

const PROJECTS = Translations.PROJECTS;

export const PROJECTS_DATA = [
  {
    title: PROJECTS.ITEMS.ANAPOL.TITLE,
    description: PROJECTS.ITEMS.ANAPOL.DESCRIPTION,
    image: 'anapol.webp',
    period: {
      start: '2017-01-01',
      end: '2018-12-31',
    },
    location: PROJECTS.ITEMS.ANAPOL.LOCATION,
    highlights: PROJECTS.ITEMS.ANAPOL.HIGHLIGHTS,
    technologies: [findTechnology('Python'), findTechnology('Django'), findTechnology('OpenCV')],
  },
];

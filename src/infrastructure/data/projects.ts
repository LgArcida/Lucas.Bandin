import type { ProjectModel } from '@domain/projects/models/project';
import { PROJECT_TYPES } from '@domain/projects/models/project';
import { findTechnology } from './technologies';
import { Translations } from '@i18n/translations';

const PROJECTS = Translations.PROJECTS;

export const PROJECTS_DATA = [
  {
    type: PROJECT_TYPES.Professional,
    company: PROJECTS.ITEMS.ANAPOL.COMPANY,
    role: PROJECTS.ITEMS.ANAPOL.ROLE,
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
  {
    type: PROJECT_TYPES.Professional,
    company: PROJECTS.ITEMS.UMSA_DERECHO.COMPANY,
    role: PROJECTS.ITEMS.UMSA_DERECHO.ROLE,
    title: PROJECTS.ITEMS.UMSA_DERECHO.TITLE,
    description: PROJECTS.ITEMS.UMSA_DERECHO.DESCRIPTION,
    image: 'umsa.webp',
    period: {
      start: '2016-06-01',
      end: '2016-12-31',
    },
    location: PROJECTS.ITEMS.UMSA_DERECHO.LOCATION,
    highlights: PROJECTS.ITEMS.UMSA_DERECHO.HIGHLIGHTS,
    technologies: [findTechnology('Python'), findTechnology('Django'), findTechnology('OpenCV')],
  },
] satisfies ProjectModel[];

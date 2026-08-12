import type { EducationModel } from '@domain/education/models/education';
import { Translations } from '@i18n/translations';

const EDUCATION = Translations.EDUCATION;

export const EDUCATION_DATA = [
  {
    institution: EDUCATION.ITEMS.UCB.INSTITUTION,
    degree: EDUCATION.ITEMS.UCB.DEGREE,
    period: {
      start: '2008-01-01',
      end: '2013-12-31',
    },
    location: EDUCATION.ITEMS.UCB.LOCATION,
    description: EDUCATION.ITEMS.UCB.DESCRIPTION,
    highlights: EDUCATION.ITEMS.UCB.HIGHLIGHTS,
    image: 'ucb.webp',
    website: 'https://www.ucb.edu.bo/',
  },
] satisfies EducationModel[];

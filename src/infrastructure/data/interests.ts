import type { BalletMilestoneModel } from '@domain/interests/models/ballet-milestone';
import type { TechHobbyModel } from '@domain/interests/models/tech-hobby';
import { Translations } from '@i18n/translations';

const BEYOND_CODE = Translations.BEYOND_CODE;
const MILESTONES = BEYOND_CODE.MILESTONES;
const HOBBIES = BEYOND_CODE.HOBBIES;

export const BALLET_MILESTONES_DATA = [
  {
    venue: MILESTONES.PLACEHOLDER_ONE.VENUE,
    role: MILESTONES.PLACEHOLDER_ONE.ROLE,
    period: {
      start: '2005-01-01',
      end: '2010-12-31',
    },
    location: MILESTONES.PLACEHOLDER_ONE.LOCATION,
    description: MILESTONES.PLACEHOLDER_ONE.DESCRIPTION,
    highlights: MILESTONES.PLACEHOLDER_ONE.HIGHLIGHTS,
  },
  {
    venue: MILESTONES.PLACEHOLDER_TWO.VENUE,
    role: MILESTONES.PLACEHOLDER_TWO.ROLE,
    period: {
      start: '2010-01-01',
      end: '2015-12-31',
    },
    location: MILESTONES.PLACEHOLDER_TWO.LOCATION,
    description: MILESTONES.PLACEHOLDER_TWO.DESCRIPTION,
    highlights: MILESTONES.PLACEHOLDER_TWO.HIGHLIGHTS,
  },
] satisfies BalletMilestoneModel[];

export const TECH_HOBBIES_DATA = [
  {
    name: HOBBIES.THREE_D_PRINTING.NAME,
    description: HOBBIES.THREE_D_PRINTING.DESCRIPTION,
    icon: 'view_in_ar',
  },
  {
    name: HOBBIES.MICROCONTROLLERS.NAME,
    description: HOBBIES.MICROCONTROLLERS.DESCRIPTION,
    icon: 'developer_board',
  },
  {
    name: HOBBIES.HOME_AUTOMATION.NAME,
    description: HOBBIES.HOME_AUTOMATION.DESCRIPTION,
    icon: 'smart_home',
  },
] satisfies TechHobbyModel[];

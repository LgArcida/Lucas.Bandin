import type { BalletMilestoneModel } from '@domain/interests/models/ballet-milestone';
import type { TechHobbyModel } from '@domain/interests/models/tech-hobby';
import { Translations } from '@i18n/translations';

const BEYOND_CODE = Translations.BEYOND_CODE;
const MILESTONES = BEYOND_CODE.MILESTONES;
const HOBBIES = BEYOND_CODE.HOBBIES;

export const BALLET_MILESTONES_DATA = [
  {
    venue: MILESTONES.BOB.VENUE,
    role: MILESTONES.BOB.ROLE,
    period: {
      start: '2005-01-01',
      end: '2010-12-31',
    },
    location: MILESTONES.BOB.LOCATION,
    description: MILESTONES.BOB.DESCRIPTION,
    highlights: MILESTONES.BOB.HIGHLIGHTS,
    image: 'bob.webp',
  },
  {
    venue: MILESTONES.EDMG.VENUE,
    role: MILESTONES.EDMG.ROLE,
    period: {
      start: '2010-01-01',
      end: '2015-12-31',
    },
    location: MILESTONES.EDMG.LOCATION,
    description: MILESTONES.EDMG.DESCRIPTION,
    highlights: MILESTONES.EDMG.HIGHLIGHTS,
    image: 'edmg.webp',
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

import type { BalletMilestoneModel } from '@domain/interests/models/ballet-milestone';
import type { TechHobbyModel } from '@domain/interests/models/tech-hobby';
import { Translations } from '@i18n/translations';

const BEYOND_CODE = Translations.BEYOND_CODE;
const MILESTONES = BEYOND_CODE.MILESTONES;
const HOBBIES = BEYOND_CODE.HOBBIES;

export const BALLET_MILESTONES_DATA = [
  {
    id: 'bob',
    venue: MILESTONES.BOB.VENUE,
    role: MILESTONES.BOB.ROLE,
    period: {
      start: '2003-01-01',
      end: '2006-12-31',
    },
    location: MILESTONES.BOB.LOCATION,
    description: MILESTONES.BOB.DESCRIPTION,
    highlights: MILESTONES.BOB.HIGHLIGHTS,
    image: 'bob.webp',
  },
  {
    id: 'edmg',
    venue: MILESTONES.EDMG.VENUE,
    role: MILESTONES.EDMG.ROLE,
    period: {
      start: '2006-01-01',
      end: '2021-12-31',
    },
    location: MILESTONES.EDMG.LOCATION,
    description: MILESTONES.EDMG.DESCRIPTION,
    highlights: MILESTONES.EDMG.HIGHLIGHTS,
    image: 'edmg.webp',
    roles: [
      {
        title: MILESTONES.EDMG.ROLES.STUDENT.TITLE,
        period: {
          start: '2006-01-01',
          end: '2021-12-31',
        },
      },
      {
        title: MILESTONES.EDMG.ROLES.CORPS.TITLE,
        period: {
          start: '2006-01-01',
          end: '2021-12-31',
        },
      },
      {
        title: MILESTONES.EDMG.ROLES.SOLOIST.TITLE,
        period: {
          start: '2006-01-01',
          end: '2021-12-31',
        },
      },
      {
        title: MILESTONES.EDMG.ROLES.PRINCIPAL.TITLE,
        period: {
          start: '2006-01-01',
          end: '2021-12-31',
        },
      },
      {
        title: MILESTONES.EDMG.ROLES.EX_PRINCIPAL.TITLE,
        period: {
          start: '2021-01-01',
        },
      },
    ],
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

import type { Translations } from '@i18n/translations';

export type NavLabelKey = keyof typeof Translations.NAV;

export interface NavItem {
  labelKey: NavLabelKey;
  targetId?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'ME', targetId: 'about' },
  { labelKey: 'ABOUT' },
  { labelKey: 'PROJECTS', targetId: 'projects' },
  { labelKey: 'CONTACT' },
];

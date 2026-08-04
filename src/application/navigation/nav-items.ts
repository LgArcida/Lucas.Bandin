import type { KEYS } from '../../assets/i18n/keys';

export type NavLabelKey = keyof typeof KEYS.NAV;

export interface NavItem {
  labelKey: NavLabelKey;
  targetId?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'ME', targetId: 'about' },
  { labelKey: 'ABOUT' },
  { labelKey: 'PROJECTS' },
  { labelKey: 'CONTACT' },
];

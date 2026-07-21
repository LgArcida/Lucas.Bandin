export interface NavItem {
  labelKey: string;
  targetId?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'NAV.ME', targetId: 'about' },
  { labelKey: 'NAV.ABOUT' },
  { labelKey: 'NAV.PROJECTS' },
  { labelKey: 'NAV.CONTACT' },
];

export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

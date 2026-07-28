import { InjectionToken } from '@angular/core';

export interface LocalizationPort {
  setLanguage(lang: string): void;
  getCurrentLanguage(): string;
}

export const LOCALIZATION_PORT = new InjectionToken<LocalizationPort>('LocalizationPort');

import { InjectionToken } from '@angular/core';

export const FEATURE_KEYS = {
  beyondCode: 'BEYOND_CODE',
} as const;

export type FeatureKey = keyof typeof FEATURE_KEYS;

export type FeatureFlags = Record<FeatureKey, boolean>;

export const FEATURE_FLAGS = new InjectionToken<FeatureFlags>('FEATURE_FLAGS');

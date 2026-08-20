import { FeatureFlags } from '@application/feature-flags/feature-flags';

export const environment = {
  featureFlags: { beyondCode: false, projectsPersonalTab: false } satisfies FeatureFlags,
};

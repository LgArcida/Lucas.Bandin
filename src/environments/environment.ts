import { FeatureFlags } from '@application/feature-flags/feature-flags';

export const environment = {
  featureFlags: { beyondCode: true, projectsPersonalTab: false } satisfies FeatureFlags,
};

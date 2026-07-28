import { TECHNOLOGIES } from './technologies';

const findTechnology = (name: string) =>
  TECHNOLOGIES.find((x) => x.name === name) ?? { name, image: '' };

export const SOCIAL_DATA = [
  { name: 'Reddit', url: 'https://www.reddit.com/user/LgArcida/', icon: 'reddit.webp' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucas-bandin-60235997/',
    icon: 'linkedin.webp',
  },
  { name: 'Facebook', url: 'https://www.facebook.com/lucas.bandin.arcida/', icon: 'facebook.webp' },
];

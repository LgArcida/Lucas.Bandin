import { en } from './en';

type KeysMap<T, Prefix extends string = ''> = T extends readonly (infer E)[]
  ? E extends object
    ? KeysMap<E, `${Prefix}${number}.`>[]
    : []
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends string
          ? `${Prefix}${K}`
          : KeysMap<T[K], `${Prefix}${K}.`>;
      }
    : never;

const buildKeys = <T>(source: T, prefix = ''): KeysMap<T> => {
  if (Array.isArray(source)) {
    return source.map((item, index) => buildKeys(item, `${prefix}${index}.`)) as KeysMap<T>;
  }

  const result = Object.fromEntries(
    Object.entries(source as Record<string, unknown>).map(([key, value]) => {
      const path = prefix ? `${prefix}${key}` : key;
      const resolved =
        value !== null && typeof value === 'object' ? buildKeys(value, `${path}.`) : path;
      return [key, resolved];
    }),
  );

  return result as KeysMap<T>;
};

export const KEYS = buildKeys(en);

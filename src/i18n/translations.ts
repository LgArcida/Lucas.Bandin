import { en } from './en';

type KeysMap<T, Prefix extends string = ''> = T extends readonly (infer E)[]
  ? E extends object
    ? KeysMap<E, `${Prefix}${number}.`>[]
    : `${Prefix}${number}`[]
  : T extends object
    ? {
        [K in keyof T & string]: T[K] extends string
          ? `${Prefix}${K}`
          : KeysMap<T[K], `${Prefix}${K}.`>;
      }
    : never;

const resolve = (value: unknown, path: string): unknown =>
  value !== null && typeof value === 'object' ? buildKeys(value, `${path}.`) : path;

const buildKeys = <T>(source: T, prefix = ''): KeysMap<T> => {
  if (Array.isArray(source)) {
    return source.map((item, index) => resolve(item, `${prefix}${index}`)) as KeysMap<T>;
  }

  const result = Object.fromEntries(
    Object.entries(source as Record<string, unknown>).map(([key, value]) => [
      key,
      resolve(value, `${prefix}${key}`),
    ]),
  );

  return result as KeysMap<T>;
};

export const Translations = buildKeys(en);

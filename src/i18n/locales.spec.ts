import { en, es } from './index';

/**
 * `es satisfies typeof en` catches missing and extra keys, but it types every array as
 * `T[]` — a locale with fewer entries than `en` still compiles. Since key paths are
 * generated from `en`'s array indices, a short array renders as the raw key path.
 */
const expectSameShape = (expected: unknown, actual: unknown, path = '<root>'): void => {
  if (Array.isArray(expected)) {
    expect(Array.isArray(actual), `${path}: expected an array`).toBe(true);
    const actualItems = actual as unknown[];
    expect(actualItems.length, `${path}: array length differs`).toBe(expected.length);
    expected.forEach((item, index) =>
      expectSameShape(item, actualItems[index], `${path}.${index}`),
    );
    return;
  }

  if (expected !== null && typeof expected === 'object') {
    expect(typeof actual === 'object' && actual !== null, `${path}: expected an object`).toBe(true);
    const actualEntries = actual as Record<string, unknown>;
    expect(Object.keys(actualEntries).sort(), `${path}: key sets differ`).toEqual(
      Object.keys(expected).sort(),
    );
    Object.entries(expected).forEach(([key, value]) =>
      expectSameShape(value, actualEntries[key], `${path}.${key}`),
    );
    return;
  }

  expect(typeof actual, `${path}: expected a string leaf`).toBe('string');
  expect((actual as string).trim().length, `${path}: translation is empty`).toBeGreaterThan(0);
};

describe('locales', () => {
  const locales = { es };

  Object.entries(locales).forEach(([lang, locale]) => {
    it(`${lang} has the same structure as en`, () => {
      expectSameShape(en, locale);
    });
  });
});

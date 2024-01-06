/**
 *
 * @param args
 * @returns {Date}
 */
export function newDate(...args: ConstructorParameters<typeof Date>) {
  return new Date(...args);
}

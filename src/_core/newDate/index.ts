/**
 *
 * @param args
 * @returns {Date}
 */
export default function newDate(...args: ConstructorParameters<typeof Date>) {
  return new Date(...args)
}

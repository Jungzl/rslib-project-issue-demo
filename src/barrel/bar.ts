export function isBoolean(param: unknown): param is boolean {
  return typeof param === 'boolean';
}

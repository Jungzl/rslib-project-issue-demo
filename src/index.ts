const isNumber = (param: unknown): param is number => typeof param === 'number';

export const squared = (n: unknown) => (isNumber(n) ? n * n : '');
export { foo } from './foo';

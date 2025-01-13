import { isNumber } from './core';

export const squared = (n: unknown) => (isNumber(n) ? n * n : '');

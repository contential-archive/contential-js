import '@babel/polyfill';
import ContentialClient from './client';

export const createClient = options => {
  return new ContentialClient(options);
};

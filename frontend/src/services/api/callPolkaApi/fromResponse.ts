import { FromResponseConverters } from './types';

export const fromResponseConverters: FromResponseConverters = {
  'query.token.balance': response => response.toBn(),
  'query.token.tokenIds': response => response,
};

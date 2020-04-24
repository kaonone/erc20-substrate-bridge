import { GenericAccountId, Bytes } from '@polkadot/types';

import { ToRequestConverters } from './types';

export const toRequestConverters: ToRequestConverters = {
  'query.token.balance': registry => ([tokenId, subAccount]) => [
    [tokenId, new GenericAccountId(registry, subAccount)],
  ],
  'query.token.tokenIds': registry => tokenAddress => new Bytes(registry, tokenAddress),
};

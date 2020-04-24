// eslint-disable-next-line import/no-extraneous-dependencies
import { RegistryTypes } from '@polkadot/types/types';
import { globalStorage } from 'services/storage';

const zeroAddress = `0x${'0'.repeat(40)}`;

interface INetworkConfig {
  id: number;
  name: string;
  rpcUrl: string;
  defaultToken: string;
  etherskanDomain: string;
  tokenConfigs: Record<string, ITokenConfig>;
}

interface ITokenConfig {
  symbolEth: string;
  symbolSub: string;
  decimals: number;
  contracts: {
    bridge: string;
    token: string;
  };
  subgraphUrls: {
    http: string;
    ws: string;
  };
}

const ethNetworkConfigs: Record<number, INetworkConfig> = {
  '4': {
    id: 4,
    name: 'Rinkeby',
    rpcUrl: 'https://rinkeby.infura.io/',
    etherskanDomain: 'https://rinkeby.etherscan.io/',
    defaultToken: '0x3F5B698332572Fb6188492F5D53ba75f81797F9d',
    tokenConfigs: {
      '0x3F5B698332572Fb6188492F5D53ba75f81797F9d': {
        symbolEth: 'DAI',
        symbolSub: 'sDAI',
        decimals: 18,
        contracts: {
          bridge: '0x0315CCA8220FE6510A41f91704716280Cd17905C',
          token: '0x3F5B698332572Fb6188492F5D53ba75f81797F9d',
        },
        subgraphUrls: {
          http: 'https://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
          ws: 'wss://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
        },
      },
      '0x3F5B698332572Fb6188492F5D53ba75f81797F9a': {
        symbolEth: 'cDAI',
        symbolSub: 'scDAI',
        decimals: 18,
        contracts: {
          bridge: '0x0315CCA8220FE6510A41f91704716280Cd17905C',
          token: '0x3F5B698332572Fb6188492F5D53ba75f81797F9a',
        },
        subgraphUrls: {
          http: 'https://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
          ws: 'wss://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
        },
      },
      '0x3F5B698332572Fb6188492F5D53ba75f81797F9b': {
        symbolEth: 'USDT',
        symbolSub: 'sUSDT',
        decimals: 18,
        contracts: {
          bridge: '0x0315CCA8220FE6510A41f91704716280Cd17905C',
          token: '0x3F5B698332572Fb6188492F5D53ba75f81797F9b',
        },
        subgraphUrls: {
          http: 'https://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
          ws: 'wss://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
        },
      },
      '0x3F5B698332572Fb6188492F5D53ba75f81797F9c': {
        symbolEth: 'USDC',
        symbolSub: 'sUSDC',
        decimals: 18,
        contracts: {
          bridge: '0x0315CCA8220FE6510A41f91704716280Cd17905C',
          token: '0x3F5B698332572Fb6188492F5D53ba75f81797F9c',
        },
        subgraphUrls: {
          http: 'https://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
          ws: 'wss://graph-node.akropolis.io/subgraphs/name/polkadai-bridge',
        },
      },
    },
  },
  '1': {
    id: 1,
    name: 'Mainnet',
    rpcUrl: 'https://mainnet.infura.io/',
    etherskanDomain: 'https://etherscan.io/',
    defaultToken: zeroAddress,
    tokenConfigs: {
      [zeroAddress]: {
        symbolEth: 'DAI',
        symbolSub: 'sDAI',
        decimals: 18,
        contracts: {
          bridge: zeroAddress,
          token: zeroAddress,
        },
        subgraphUrls: {
          http: 'https://',
          ws: 'wss://',
        },
      },
    },
  },
};

const tokenAddressFromLS = globalStorage.get('token');

export const NETWORK_ID = 4;
export const ETH_NETWORK_CONFIG = ethNetworkConfigs[NETWORK_ID];
export const TOKEN_CONFIG =
  (tokenAddressFromLS && ETH_NETWORK_CONFIG.tokenConfigs[tokenAddressFromLS]) ||
  ETH_NETWORK_CONFIG.tokenConfigs[ETH_NETWORK_CONFIG.defaultToken];
export const DEFAULT_DECIMALS = 18;

export const ETHEREUM_UNIT_NAME = TOKEN_CONFIG.symbolEth;
export const SUBSTRATE_UNIT_NAME = TOKEN_CONFIG.symbolSub;

export const SUBGRAPH_HTTP_URL = TOKEN_CONFIG.subgraphUrls.http;
export const SUBGRAPH_WS_URL = TOKEN_CONFIG.subgraphUrls.ws;

export const SUBSTRATE_DEFAULT_ADDRESS_PREFIX = 42;
export const SUBSTRATE_NODE_URL = 'wss://node1-chain.akropolis.io';
export const SUBSTRATE_NODE_CUSTOM_TYPES: RegistryTypes = {
  Count: 'u64',
  DaoId: 'u64',
  MemberId: 'u64',
  ProposalId: 'u64',
  VotesCount: 'MemberId',
  TokenId: 'u32',
  Days: 'u32',
  Rate: 'u32',
  Dao: {
    address: 'AccountId',
    name: 'Text',
    description: 'Bytes',
    founder: 'AccountId',
  },
  Action: {
    _enum: {
      EmptyAction: null,
      AddMember: 'AccountId',
      RemoveMember: 'AccountId',
      GetLoan: '(Vec<u8>, Days, Rate, TokenId Balance)',
      Withdraw: '(AccountId, Balance, Vec<u8>)',
      ChangeTimeout: '(DaoId, BlockNumber)',
      ChangeMaximumNumberOfMembers: '(DaoId, MemberId)',
    },
  } as any,
  Proposal: {
    dao_id: 'DaoId',
    action: 'Action',
    open: 'bool',
    accepted: 'bool',
    voting_deadline: 'BlockNumber',
    yes_count: 'VotesCount',
    no_count: 'VotesCount',
  },
  Token: {
    token_id: 'u32',
    decimals: 'u16',
    symbol: 'Vec<u8>',
  },
  Limits: {
    max_tx_value: 'u128',
    day_max_limit: 'u128',
    day_max_limit_for_one_address: 'u128',
    max_pending_tx_limit: 'u128',
    min_tx_value: 'u128',
  },
  Status: {
    _enum: [
      'Revoked',
      'Pending',
      'PauseTheBridge',
      'ResumeTheBridge',
      'UpdateValidatorSet',
      'UpdateLimits',
      'Deposit',
      'Withdraw',
      'Approved',
      'Canceled',
      'Confirmed',
    ],
  },
  Kind: {
    _enum: ['Transfer', 'Limits', 'Validator', 'Bridge'],
  },
  TransferMessage: {
    message_id: 'H256',
    eth_address: 'H160',
    substrate_address: 'AccountId',
    amount: 'Balance',
    status: 'Status',
    direction: 'Status',
  },
  LimitMessage: {
    id: 'H256',
    limits: 'Limits',
    status: 'Status',
  },
  BridgeMessage: {
    message_id: 'H256',
    account: 'AccountId',
    status: 'Status',
    action: 'Status',
  },
  ValidatorMessage: {
    message_id: 'H256',
    quorum: 'u64',
    accounts: 'Vec<AccountId>',
    status: 'Status',
    action: 'Status',
  },
  BridgeTransfer: {
    transfer_id: 'ProposalId',
    message_id: 'H256',
    open: 'bool',
    votes: 'MemberId',
    kind: 'Kind',
  },
};

import { Message } from 'generated/bridge-graphql';

export interface PayloadByKey {
  transfers: Message[];
  version: string;
  nodeUrl: string;
  token: string;
}

export type StorageKey = keyof PayloadByKey;

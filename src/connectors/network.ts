import { URLS } from '../lib/chains';
import { initializeConnector } from '@web3-react/core';
import { Network } from '@web3-react/network';

export const [network, hooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: URLS })
);

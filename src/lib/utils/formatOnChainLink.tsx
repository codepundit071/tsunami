import { BlockchainType } from '../types';

const CHAIN_PREFIXES = {
  1: 'etherscan.io',
  3: 'ropsten.etherscan.io',
  4: 'rinkeby.etherscan.io',
  5: 'goerli.etherscan.io',
  42: 'kovan.etherscan.io',
  56: 'bscscan.com',
};

export function formatOnChainLink(
  type: 'Account' | 'Transaction',
  data: [BlockchainType, string]
) {
  switch (type) {
    case 'Account': {
      const [chainId, address] = data;
      // @ts-expect-error
      return `https://${CHAIN_PREFIXES[chainId]}/address/${address}`;
    }
    case 'Transaction': {
      const [chainId, hash] = data;
      // @ts-expect-error
      return `https://${CHAIN_PREFIXES[chainId]}/tx/${hash}`;
    }
  }
}

import { StatusOfflineIcon } from '@heroicons/react/solid';
import { ETHERSCAN_URL } from '../constants';
import { BlockchainType, ChainEnum } from '../types';

export function generateChainBase(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return ETHERSCAN_URL;
    default:
      ``;
  }
}

export function generateChainAbbreviation(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return 'Ξ';
    default:
      return 'Ξ';
  }
}

export function renderConnectedChain(chain?: BlockchainType) {
  switch (chain) {
    case ChainEnum.erc:
      return <p>ETH</p>;
    case ChainEnum.offline:
      return (
        <StatusOfflineIcon
          className="h-5 w-5 text-gray-900"
          aria-hidden="true"
        />
      );
    default:
      return (
        <StatusOfflineIcon className="h-5 w-5 text-black" aria-hidden="true" />
      );
  }
}

import { AppProps } from 'next/app';
import { Component } from 'react';

export type AuthenticatedPage = {
  role?: string;
  redirectTo?: string; // redirect to this url
};
export type ExtendedPageProps = {
  requiresAuth?: boolean;
  auth?: AuthenticatedPage;
  layout?: Component;
};

export type ExtendedAppProps = AppProps & {
  Component: ExtendedPageProps;
};

export const Visibility: {
  VISIBLE: 'VISIBLE';
  HIDDEN: 'HIDDEN';
  FEATURED: 'FEATURED';
  DEAL: 'DEAL';
} = {
  VISIBLE: 'VISIBLE',
  HIDDEN: 'HIDDEN',
  FEATURED: 'FEATURED',
  DEAL: 'DEAL',
};

export type Visibility = typeof Visibility[keyof typeof Visibility];
export enum ChainEnum {
  erc = 1,
  bsc = 56,
  offline = -1,
}

export type BlockchainType = ChainEnum.erc | ChainEnum.bsc | ChainEnum.offline;

export enum WalletEnum {
  metamask,
  coinbase,
  gnosisSafe,
  walletConnect,
}

export type WalletType =
  | WalletEnum.metamask
  | WalletEnum.coinbase
  | WalletEnum.walletConnect
  | WalletEnum.gnosisSafe;

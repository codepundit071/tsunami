import React from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { useAccount, useChainId, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from '../../button';
import { BoxSection } from '../../container';

const CHAINS: { [chainId: number]: string } = {
  1: 'Ethereum Mainnet',
  56: 'Ethereum Testnet',
};

export const ConnectionWizard = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="h-full w-full p-2 text-black">
      <BoxSection title="Status">
        {isConnected ? 'Connected' : 'Disconnected'}
      </BoxSection>
      <BoxSection title="Network">
        {isConnected ? `${CHAINS[chainId]}` : 'Disconnected'}
      </BoxSection>
      <BoxSection title="Account">
        {isConnected ? (
          `${address?.toString()}`
        ) : (
          <Button onClick={() => connect()}>Connect</Button>
        )}
      </BoxSection>
      <div className="flex w-full justify-end">
        <Button
          onClick={() => {
            if (isConnected) {
              disconnect();
            } else {
              connect();
            }
          }}
        >
          {isConnected ? 'Disconnect' : 'Connect'}
        </Button>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'connectionWizard',
  icon: '/icons/apps/metamask.png',
  defaultWidth: '400px',
  defaultHeight: 'auto',
  allowResize: false,
  history: [],
  name: 'Connection Wizard',
  actions: 'EXIT',
  extraAction: [],
  state: 'HIDDEN',
  component: <ConnectionWizard />,
};

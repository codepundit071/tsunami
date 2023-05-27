import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';

export const Roadmap = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-black px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <div
        className="z-1 flex w-full flex-col gap-4 bg-black px-4 py-2 text-white"
        style={{
          boxShadow:
            'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
        }}
      >
        <h1 className="w-full text-center text-4xl font-bold">Roadmap</h1>
        <div className='relative'>
          <img src="/coins.png" alt="Coins" className='absolute top-10 left-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute top-40 right-10 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute -bottom-20 right-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute -bottom-4 left-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute top-1/3 left-1/3 h-24' />
          <article className='w-[600px] mx-auto text-lg'>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Q2, 2023: ZK VPN Launch:</h4>
              <p> Embark on the ZKTsunami journey with the launch of our groundbreaking ZK VPN. Experience unparalleled anonymity in terms of location as you bid farewell to concerns about traceability, ushering in a new era of privacy within the blockchain.</p>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Q3, 2023: Mixer Launches:</h4>
              <p>Witness the unveiling of ZKTsunami's innovative mixer, empowering you to mix and obscure your transactions. This milestone reinforces our commitment to revolutionizing privacy in DeFi, providing a secure haven for your financial activities.</p>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Q4, 2023: Browser and Privacy Swap Launch:</h4>
              <p>Prepare for the next wave of privacy solutions as ZKTsunami introduces its secure browser and privacy swap functionalities. Explore the web with confidence, knowing that your interactions are shielded from prying eyes. Seamlessly swap tokens while protecting your personal and transactional data from public knowledge.</p>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Q4, 2024: Privacy Wallet Launch:</h4>
              <p>Embrace the ultimate privacy-centric wallet as ZKTsunami unveils its state-of-the-art solution. With our wallet, your identities and transactions are rendered anonymous and secure, ensuring a truly decentralized and private experience within the Web3 ecosystem.</p>
            </div> 
          </article>
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'roadmap',
  icon: '/icons/apps/zk-snark-info-v1.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'Roadmap',
  actions: 'ALL',
  extraAction: [],
  allowResize: {
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    left: true,
    right: true,
    top: true,
    topLeft: true,
    topRight: true,
  },
  state: 'HIDDEN',
  top: () => (
    <WebAddress
      icon={APP_CONFIG.icon}
      address={'https://www.zktsunami.io/roadmap.html'}
    />
  ),
  component: <Roadmap />,
};

import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';

export const Utility = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-black px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <h1 className='text-4xl text-[#0eb3ff] font-bold'>UTILITY</h1>
      <section className='mt-6'>
        <ul className='flex flex-wrap justify-center'>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className='text-center'>
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_5.gif" className='h-28 block mx-auto' alt="" />
              <h4 className='font-semibold text-2xl'>ZKT DApp</h4>
              <p className=''>Our all-in-one decentralized application allows you to perform on-chain activities securely and privately, thanks to our zero-knowledge underlying infrastructure.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_3.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK VPN</h4>
              <p> Maintain anonymity and location privacy with our ZK VPN, ensuring your presence remains untraceable on the blockchain.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_4.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK SWAP</h4>
              <p> Swap your assets securely with our ZK Swap protocol, protecting your personal and transactional data from public knowledge.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK Wallet</h4>
              <p>  Keep your identities and transactions anonymous and secure with our upcoming privacy-focused ZK Wallet, designed exclusively for Web3 interactions.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_2.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK Browser</h4>
              <p>Experience a friendly and 100% secure browsing environment with our ZK Browser, leveraging the anonymous ethos of zero-knowledge proofs.</p>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'utility',
  icon: '/icons/apps/zk-snark-info-v1.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'Utility',
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
      address={'https://www.zktsunami.io/meet-the-team.html'}
    />
  ),
  component: <Utility />,
};

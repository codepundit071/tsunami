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
      <h1 className='text-4xl text-primary-blue font-bold'>UTILITY</h1>
      <section className='mt-6'>
        <ul className='flex flex-wrap justify-center'>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className='text-center'>
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_5.gif" className='h-28 block mx-auto' alt="" />
              <h4 className='font-semibold text-2xl'>ZKT DApp</h4>
              <p className=''>ZkDapp serves as our flagship product, functioning as an advanced mixer within the ZKTsunami ecosystem. With a strong emphasis on privacy, ZkDapp enables users to mix ERC-20 tokens securely and anonymously. It sets itself apart from competitors by offering unparalleled privacy features and ensuring that users’ transactions cannot be traced back to their original source. Once completion of the ERC-20 mixer has been reached, we will then be able to expand at a faster rate to achieve a multi-chain mixer.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_3.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK VPN</h4>
              <p> ZkVPN is a privacy-focused virtual private network (VPN) solution currently undergoing beta testing. We have procured 40 servers worldwide to ensure optimal performance and global accessibility. Unlike conventional VPN services, ZkVPN places utmost importance on preserving complete user privacy. It employs cutting-edge technologies that eliminate the need for users to provide any personal information during sign-up. Instead, ZkVPN generates a unique ID for each user, allowing for anonymous usage. Payments for the service can be made using cryptocurrency, further enhancing privacy. ZkVPN does not track stable IP addresses, ensuring that users’ online activities remain completely confidential.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_4.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK SWAP</h4>
              <p>ZKswap is a decentralized exchange (DEX) platform within the ZKTsunami ecosystem, enabling users to swap tokens seamlessly and anonymously. It sets itself apart from other DEX platforms by prioritizing privacy and anonymity. ZKswap ensures that transaction histories remain private, providing users with enhanced security and confidentiality when trading tokens.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK Wallet</h4>
              <p>  Zkwallet is a secure and private digital wallet designed to safeguard users’ assets. By leveraging advanced cryptographic techniques, Zkwallet ensures that users have full control over their funds while maintaining complete privacy. Unlike traditional wallets, Zkwallet implements robust privacy measures to protect user identities, transaction histories, and asset holdings.</p>
            </article>
          </li>
          <li className='py-4 px-6 w-1/3 shrink-0'>
            <article className="text-center">
              <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_2.gif" className='h-28 block mx-auto' alt="" />
              <h4 className="font-semibold text-2xl">ZK Browser</h4>
              <p>ZkBrowser is a comprehensive private browser designed to protect users’ online privacy. By blocking trackers, removing cookies, and preventing data leakage, ZkBrowser ensures that users can browse the internet without leaving any digital footprints. It distinguishes itself from competitors by providing a fully private browsing experience, shielding users from intrusive tracking and data collection.</p>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'utility',
  icon: '/desktopIcon/utility.png',
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

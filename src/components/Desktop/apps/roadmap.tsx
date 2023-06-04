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
              <h4 className='font-semibold'>Phase 1:</h4>
              <ul>
                <li>* Launch ZKTsunami</li>
                <li>* Whitepaper release</li>
                <li>* Hold AMAs discussing on the project</li>
                <li>* Inject 100k+ into the liquidity</li>
                <li>* Build a concept and community around privacy </li>
              </ul>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Phase 2: (Q2 2023)</h4>
              <ul>
                <li>* Launch secure ZkVPN</li>
                <li>* Conduct extensive testing</li>
                <li>* Seamless integration into web ecosystem</li>
                <li>* Improve user interface</li>
                <li>* Provide multi-platform support</li>
                <li>* Launch V2 website</li>
              </ul>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Phase 3: (Q3 2023)</h4>
              <ul>
                <li>* In-development and launch Mixer feature</li>
                <li>* Thorough testing and security audits</li>
                <li>* Implement advanced encryption techniques</li>
                <li>* Enable integration with cryptocurrencies</li>
                <li>* Customizable mixing options</li>
              </ul>
            </div>
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Phase 4: (Q4 2023)</h4>
              <ul>
                <li>* Develop and refine Privacy Swap feature</li>
                <li>* Rigorous testing and security audits</li>
                <li>* Implement automated privacy protocols</li>
                <li>* Support wide range of tokens</li>
                <li>* Real-time transaction monitoring</li>
              </ul>
            </div> 
            <div className='tokenomics tokenomics-desktop border-white'>
              <h4 className='font-semibold'>Phase 5: (Q1 2024)</h4>
              <ul>
                <li>* Develop and release Privacy Wallet</li>
                <li>* Thorough testing and security audits</li>
                <li>* Protections Shielded Against Hackers, Exploiters, and Bad Actors on Network</li>
                <li>* ZKTsunami Polygon & FTM Launch</li>
                <li>* Implement advanced encryption</li>
                <li>* Integrate Binance Smart Chain (BSC)</li>
                <li>* Easy token management within the Privacy Wallet</li>
              </ul>
            </div> 
          </article>
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'roadmap',
  icon: '/desktopIcon/roadmap.png',
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

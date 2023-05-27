import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';
import Image from 'next/image';

export const Tokenomics = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-[#101010] py-4 px-2 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <div>
        <div>
          <div className='relative mb-40'>
            <img src="/coins.png" alt="Coins" className='absolute top-10 left-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute top-40 right-10 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute -bottom-20 right-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute -bottom-4 left-40 h-24' />
            <img src="/coins.png" alt="Coins" className='absolute top-1/3 left-1/3 h-24' />
            <img src='/tokenomics.png' className='block mx-auto h-44' />
            <p className='text-xl text-center p-10 leading-[210%] w-10/12 mx-auto bg-[#1B1B1B]/[73] border-2 border-dashed'>The economic model of our currency is deflation-based. At an early stage, the validators will be paid the fee for their efforts. A proportional ZKT burning mechanism similar to Bancor will accompany the fee payment process.With the development of our system, we envision our ecosystem can offer more sophisticated services other than simple payment. The potential services include privacy-preserving proof-of-identity, confidential data source verification or secure query over private data, etc. These services can also be charged fees accompanied by a fair ZKT burning process.</p>
          </div>
          <section className='mb-32'>
            <img src="/distribution.png" alt="" className="mx-auto block mb-10" />
            <div className='relative z-10'>
              <div className="absolute h-72 -z-10 border-2 border-dashed border-white w-11/12 left-1/2 -translate-x-1/2 top-10"/>
              <div className='border-l border-2 border-dashed border-white w-px h-32 absolute left-[20%] top-[104px]'/>
              <div className='border-l border-2 border-dashed border-white w-px h-32 absolute right-[20%] top-[104px]'/>
              <div className='border-l border-2 border-dashed border-white w-px h-32 absolute left-1/2 -translate-x-1/2 top-[104px]'/>
              <h3 className='text-center py-4 px-10 bg-white text-black w-3/4 mx-auto font-bold text-7xl mb-32'>5,000,000 $ZKT</h3>
              <div className='grid grid-cols-3 gap-10 w-5/6 mx-auto'>
                <article className="distribution">
                  <h4 className='text-6xl font-bold'>12%</h4>
                  <p>600,000 $ZKT</p>
                  <span>Fundraising</span>
                </article>
                <article className="distribution">
                  <h4 className='text-6xl font-bold'>4.8%</h4>
                  <p>240,000 $ZKT</p>
                  <span>The Team</span>
                </article>
                <article className="distribution">
                  <h4 className='text-6xl font-bold'>3.2%</h4>
                  <p>160,000 $ZKT</p>
                  <span>The Foundation</span>
                </article>
              </div>
            </div>
          </section>
          <section className='relative pb-20 z-10'>
            <img src="/token-topper-v1.png" alt="Coins" className='absolute bottom-0 -z-10 left-0 w-full'/>
            <h2 className='text-center text-7xl font-bold text-white leading-loose'>TOKEN TEIR SYSTEM</h2>
            <div className='bg-black py-4'>
              <article className="grid grid-cols-3 text-center border-2 border-white ">
                <div className='py-4 border-r-2 border-white'>
                  <h4 className='font-bold text-xl'>0.1% - 5%</h4>
                  <p className='text-sm'>Discount</p>
                </div>
                <div className='py-4 col-span-2'>
                  <p className='text-sm w-9/12 mx-auto'>Embrace the first tier and enjoy significant savings on transaction fees, reinforcing your privacy while optimizing your financial efficiency.</p>
                </div>
                <div className='py-4 col-span-2 border-y-2 border-white'>
                  <p className='text-sm w-9/12 mx-auto'>Elevate your commitment to privacy with the second tier, where substantial discounts eliminate transaction fees, allowing you to transact freely and securely.</p>
                </div>
                <div className='py-4 border-l-2 border-y-2 border-white'>
                  <h4 className='font-bold text-xl'>2% - 100%</h4>
                  <p className='text-sm'>Discount</p>
                </div>
                <div className='py-4 border-r-2 border-white'>
                  <h4 className='font-bold text-xl'>1.9% - 95%</h4>
                  <p className='text-sm'>Discount</p>
                </div>
                <div className='py-4 col-span-2'>
                  <p className='text-sm w-9/12 mx-auto'>Join the privileged few in the third tier and experience remarkable savings as your $ZKT holdings grow, maximizing both privacy and financial advantages.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'tokenomics',
  icon: '/icons/apps/zk-snark-info-v1.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'Tokenomics',
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
      address={'https://www.zktsunami.io/tokenomics.html'}
    />
  ),
  component: <Tokenomics />,
};

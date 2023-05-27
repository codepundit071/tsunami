import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';

export const Zktsunami = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-pixel-art bg-cover bg-center bg-no-repeat px-2 py-4 font-po text-sm font-normal text-white"
    >
      <div
        className="z-1 flex w-full flex-col gap-4 px-4 pt-5 pb-2 text-white"
      >
        <h1 className='py-4'><img src="/zk.png" alt="Zktsunami" className='block mx-auto h-20' /></h1>
        <p className='border-[3px] border-dashed border-[#3215A4] p-4 bg-[#171717]/[88%] text-lg leading-loose w-10/12 mx-auto'>
          Zcash was the first to implement and apply ZK-SNARK in the decentralizedcryptocurrency. The relatively costly proof generation further reduces the likelihood of its adoption in practice. ZKTsunami implements and integrates the state-of-the-art setup-free zero-knowledge proof protocol to enable trustless anonymous payment for smart contract platforms. Our proposed ZK-AnonSNARK scheme also attains the optimal balance between performance and security, i.e., almost constant proof size and efficient proof generation and verification. This will anonymize any cryptocurrency, including Bitcoin and Ethereum
        </p>
        <div className="flex justify-center gap-3 my-4">
          <img src="/small_images/group-4.png" alt="" className="shrink-0" />
          <img src="/small_images/group-1.png" alt="" className="shrink-0" />
          <img src="/small_images/group-2.png" alt="" className="shrink-0" />
          <img src="/small_images/group-3.png" alt="" className="shrink-0" />
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'zktsunami',
  icon: '/icons/apps/zk-snark-info-v1.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'Zktsunami',
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
      address={'https://www.zktsunami.io/Zktsunami.html'}
    />
  ),
  component: <Zktsunami />,
};

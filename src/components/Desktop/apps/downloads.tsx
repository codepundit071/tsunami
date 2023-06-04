import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';
import { Button } from '../../button';
import Link from 'next/link';

export const Download = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-black px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <h1 className='text-4xl text-primary-blue font-bold'>DOWNLOADS</h1>
      <section className='mt-6'>
        <div className="w-full px-4 py-8 bg-[#0c496d]">
            <h1 className="w-full text-center text-base font-bold">
              Download our latest beta versions
            </h1>
            <div className='flex justify-center pt-4'>
              <Link href="https://drive.google.com/file/d/1ytOgd1DRlt9b3IxmsJnE1IT5eym6batC/view">
                <Button>
                  <span className='font-bold px-4'>
                    ZKT VPN
                  </span>
                </Button>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'download',
  icon: '/icons/favicon-128.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'Downloads',
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
      address={'https://www.zktsunami.io/apps-download.html'}
    />
  ),
  component: <Download />,
};

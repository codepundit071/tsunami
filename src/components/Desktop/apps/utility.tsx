import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';
import { BsGlobe } from "react-icons/bs";

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
      <section>
        <ul className='flex'>
          <li className='p-4 w-1/3 shrink-0'>
            <article>
              <p><BsGlobe/></p>
            </article>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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

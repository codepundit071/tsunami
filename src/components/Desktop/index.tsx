import React, { useEffect } from 'react';
import { Window } from '../window';
import { AppIcon } from '../desktopApp';
import { IWindow, useComputerState } from '../../lib/hooks/useComputerState';
import { APP_CONFIG as METAMASK_CONFIG } from './apps/connectionWizard';
import { APP_CONFIG as ABOUT_CONFIG } from './apps/about';
import { APP_CONFIG as ZK_CONFIG } from './apps/zkSnarks';
import { APP_CONFIG as TOKEN_CONFIG } from './apps/tokenomics';
import { APP_CONFIG as ROAD_CONFIG } from './apps/roadmap';
import { APP_CONFIG as TEAM_CONFIG } from './apps/meettheteam';
import { APP_CONFIG as TSUNAMI_CONFIG } from './apps/zktsunami';
import { APP_CONFIG as UTILITY_CONFIG } from './apps/utility';
import AOS from 'aos'
import 'aos/dist/aos.css';

import { Taskbar } from '../taskbar';

const APPS = [
  METAMASK_CONFIG,
  ABOUT_CONFIG,
  ZK_CONFIG,
  TOKEN_CONFIG,
  ROAD_CONFIG,
  TEAM_CONFIG,
  TSUNAMI_CONFIG,
  UTILITY_CONFIG
];

function DekstopComputer({}: any) {
  const { openWindows, setOpenWindows, taskbarApps } = useComputerState();

  useEffect(() => {
    setOpenWindows(APPS);
    AOS.init({ once: true,  duration: 1000 });

  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-hidden bg-black font-po font-bold text-white">
      <img
        className="absolute z-0 h-screen w-screen"
        src='/splitting/zktsunami.png'
      />
      <div className='absolute h-screen w-screen z-[1]'>
        <div className='flex items-end absolute bottom-0 left-8'>
          <img src="/splitting/station.png" data-aos="slide-up" alt="" className="h-48"/>
          <img src="/splitting/chair.png" data-aos-delay="200" alt="" className="h-16"/>
          <img src="/splitting/light.png" data-aos="slide-up" data-aos-delay="50" alt="" className="w-[4.4rem] absolute right-12 -z-[1]"/>
          <img src="/splitting/tree2.png"  data-aos="slide-up" alt="" className="h-64 absolute left-0 -z-[1]"/>
        </div>
        <img src="/splitting/tree2.png" alt="" data-aos="slide-up" className="h-72 absolute right-2 bottom-0"/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <img src="/splitting/logo.png" data-aos="fade-down-right" alt="" className="h-72 block z-10 mx-auto"/>
          <img src="/splitting/nametag.png" alt="" className="h-28 -m-10 block mx-auto"/>
        </div>
        <div>
          <img src="/splitting/cloud3.png" data-aos="slide-right" alt="" className="h-36 absolute left-20 top-20" />
          <img src="/splitting/cloud.png" data-aos="slide-left" alt="" className="h-44 absolute right-20 top-0" />
          <img src="/splitting/cloud2.png" data-aos="slide-right" alt="" className="h-56 absolute left-1/2 top-10 -translate-x-1/2" />
        </div>
      </div>
      <div
        id={'iconArea'}
        className="absolute z-[2] h-screen w-screen px-2 pt-4"
      >
        <div className='flex flex-col flex-wrap h-screen w-fit pb-4'>
          {APPS.map((app) => {
            return <AppIcon key={app.id} appConfig={app} />;
          })}
        </div>
      </div>
      <div
        id={'windowArea'}
        className="pointer-events-none absolute z-10 flex h-screen w-screen flex-col flex-wrap"
      >
        {openWindows?.map((window: IWindow) => {
          return <Window window={window} />;
        })}
      </div>
      <Taskbar />
    </div>
  );
}

export default DekstopComputer;

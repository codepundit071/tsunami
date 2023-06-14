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
import { APP_CONFIG as DOWNLOAD_CONFIG } from './apps/downloads';

import AOS from 'aos'
import 'aos/dist/aos.css';

import { Taskbar } from '../taskbar';
import { ExternalIcon } from '../desktopApp/indexSocial';

const APPS = [
  METAMASK_CONFIG,
  ABOUT_CONFIG,
  ZK_CONFIG,
  TOKEN_CONFIG,
  ROAD_CONFIG,
  TEAM_CONFIG,
  TSUNAMI_CONFIG,
  UTILITY_CONFIG,
  DOWNLOAD_CONFIG
];

const externals = [
  {
    id: 1,
    name: "Chart",
    icon: "/socials/chart.png",
    link: "http://dextools.io/app/ether/pair-explorer/0x8AeB846614f63342fdf2dB8865c930B5257F21f0"
  },
  {
    id: 2,
    name: "Medium",
    icon: "/socials/chatr.png",
    link: "https://zktsunami.medium.com/"
  },
  {
    id: 3,
    name: "Telegram",
    icon: "/socials/tele.png",
    link: "https://t.co/UeO1ZhEB8E"
  },
  {
    id: 4,
    name: "Twitter",
    icon: "/socials/twitter.png",
    link: "https://twitter.com/ZKTsunami"
  },
  {
    id: 5,
    name: "Buy",
    icon: "/socials/uniswap.png",
    link: "https://app.uniswap.org/#/swap?outputCurrency=0x76fca1adb104770b38581b64d55e67fa5a0f3966"
  }
]

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
        src='/background.gif'
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
      <div className="absolute z-[2] h-screen w-screen bg-black/40"></div>
      <div
        id={'iconArea'}
        className="absolute z-[3] h-screen w-screen px-2 pt-4 pb-3"
      >
        <div className='flex flex-col flex-wrap h-full w-fit'>
          {APPS.map((app) => {
            return <AppIcon key={app.id} appConfig={app} />;
          })}
          {externals.map((social)=>{
            return <ExternalIcon key={social.id} appConfig={social} />
          })

          }
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

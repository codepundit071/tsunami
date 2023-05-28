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
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-hidden bg-black font-po font-bold text-white">
      <img
        className="absolute z-0 h-screen w-screen"
        src='/animation/zktsunami.gif'
      />
      <div
        id={'iconArea'}
        className="absolute z-[1] h-screen w-screen px-2 pt-4"
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

import React, { createRef } from 'react';
import { Button } from '../button';
import { IWindow, useComputerState } from '../../lib/hooks/useComputerState';
import { TaskbarApp } from './app';
import { Time } from '../time';

export const Taskbar = () => {
  const { taskbarApps, activeWindow } = useComputerState();
  const taskbarRef = createRef<HTMLDivElement>();
  return (
    <div
      className={`absolute bottom-0 z-[99] flex h-max w-full flex-row items-center gap-2 bg-[#cac6cb] px-2 py-1`}
      style={{
        boxShadow:
          'rgb(70, 65, 71) -1px -1px 0px 0px inset, white 1px 1px 0px 0px inset, rgb(160, 153, 161) -2px -2px 0px 0px inset, rgb(222, 220, 222) 2px 2px 0px 0px inset',
      }}
    >
      <Button>
        <img src={'/icons/apps/start.png'} className="w-[20px]" />
        <span className="ml-1 font-po text-sm font-bold tracking-[-1px]">
          Start
        </span>
      </Button>
      <div className="taskbarContainer flex h-[32px] flex-1 gap-1">
        {taskbarApps?.map((window: IWindow) => {
          return <TaskbarApp key={window.id} app={window} />;
        })}
      </div>
      <div
        className="flex items-center gap-4"
        style={{
          backgroundPosition: '0px 0px, 1px 1px',
          backgroundSize: '2px 2px',
          backgroundImage:
            'linear-gradient(45deg, rgb(239, 238, 240) 25%, transparent 25%, transparent 75%, rgb(239, 238, 240) 75%, rgb(239, 238, 240)), linear-gradient(45deg, rgb(239, 238, 240) 25%, transparent 25%, transparent 75%, rgb(239, 238, 240) 75%, rgb(239, 238, 240))',
          backgroundColor: 'rgb(202, 198, 203)',
          boxShadow:
            'white -1px -1px 0px 0px inset, rgb(70, 65, 71) 1px 1px 0px 0px inset, rgb(222, 220, 222) -2px -2px 0px 0px inset, rgb(202, 198, 203) 2px 2px 0px 0px inset',
        }}
      >
        <Time />
      </div>
    </div>
  );
};

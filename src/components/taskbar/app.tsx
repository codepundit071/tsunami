import React, { useState } from 'react';
import { IWindow, useComputerState } from '../../lib/hooks/useComputerState';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';

export const TaskbarApp = ({ app }: { app: IWindow }) => {
  const { activeWindow, updateWindows } = useComputerState();
  return (
    <span
      className={clsx(
        'handle flex h-full cursor-pointer flex-row items-center justify-center gap-2 px-2 py-1 text-black',
        activeWindow?.id === app.id
          ? 'bg-[#cac6cb] hover:bg-[#000]/[10%]'
          : 'bg-[#000]/[10%] hover:bg-[#cac6cb]'
      )}
      style={{
        backgroundImage:
          activeWindow?.id === app.id
            ? 'linear-gradient(45deg, rgb(239, 238, 240) 25%, transparent 25%, transparent 75%, rgb(239, 238, 240) 75%, rgb(239, 238, 240)), linear-gradient(45deg, rgb(239, 238, 240) 25%, transparent 25%, transparent 75%, rgb(239, 238, 240) 75%, rgb(239, 238, 240))'
            : 'linear-gradient(0deg, #cac6cb 0%, #cac6cb 100%)',
        backgroundPosition: '0px 0px, 1px 1px',
        backgroundSize: '2px 2px',
        boxShadow:
          activeWindow?.id === app.id
            ? 'white -1px -1px 0px 0px inset, rgb(70, 65, 71) 1px 1px 0px 0px inset, rgb(222, 220, 222) -2px -2px 0px 0px inset, rgb(202, 198, 203) 2px 2px 0px 0px inset'
            : 'rgb(70, 65, 71) -1px -1px 0px 0px inset, white 1px 1px 0px 0px inset, rgb(160, 153, 161) -2px -2px 0px 0px inset, rgb(222, 220, 222) 2px 2px 0px 0px inset',
      }}
      onClick={() => {
        updateWindows(app, 'TASK_CLICK');
      }}
    >
      <img src={app.icon} className="h-[20px] w-[20px]" />
      <p className="select-none text-sm font-black tracking-[-1px]">
        {app.name}
      </p>
    </span>
  );
};

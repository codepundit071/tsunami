import React, { createRef, useState } from 'react';
import Draggable from 'react-draggable';
import { IWindow, useComputerState } from '../../lib/hooks/useComputerState';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';

export const ExternalIcon = ({ appConfig }: { appConfig: any }) => {
  const {
    id,
    name,
    icon,
    link,
  } = appConfig;
  const {
    selectedApp,
    activeWindow,
    setSelectedApp,
    updateWindows,
    setActiveWindow,
  } = useComputerState();

  const [size, setSize] = useState<{ width: number; height: number }>();
  const [position, setPosition] = useState<{ x: number; y: number }>();
  const ref = createRef<any>();
  return (
    <Draggable
      handle=".handle"
      grid={[5, 5]}
      scale={1}
      onStart={() => {
        setSelectedApp(appConfig);
        setActiveWindow(appConfig);
      }}
      onDrag={console.log}
      onStop={console.log}
    >
      <a
        className={clsx(
          `handle pointer-events-auto z-10 my-2 flex h-min w-min min-w-[100px] cursor-pointer flex-col items-center gap-1 py-1 px-1`
        )}
        href={link}
        target='_blank'
      >
        <img
          src={icon}
          className="pointer-events-none h-12 w-12"
          style={{
            imageRendering: 'pixelated',
          }}
        />
        <div
          className={clsx(
            'pointer-events-none flex max-w-min items-center justify-center px-2 text-xl uppercase text-center -mt-1 font-po font-normal',
            selectedApp?.id === id
              ? 'border border-dashed border-[#fff]/50 bg-[#0b61ff]/25 text-white'
              : 'border border-transparent'
          )}
          style={{
            textShadow: 'black 0px 1px 1px',
          }}
        >
          {name}
        </div>
      </a>
    </Draggable>
  );
};

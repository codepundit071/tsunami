import React, { createRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { IWindow, useComputerState } from '../../lib/hooks/useComputerState';
import { Button } from '../button';
import { Minimize } from '../../icons/minimize';
import { Maximize } from '../../icons/maximize';
import { Close } from '../../icons/close';
import clsx from 'clsx';
import { Rnd } from 'react-rnd';

export const Window = ({ window }: { window: IWindow }) => {
  const {
    activeWindow,
    taskbarApps,
    setActiveWindow,
    updateWindows,
    openWindows,
  } = useComputerState();
  const ref = createRef<any>();

  const DEFAULT = 150;

  return (
    <Rnd
      ref={ref}
      bounds="window"
      dragHandleClassName="handle"
      onDragStart={() => setActiveWindow(window)}
      default={{
        x: DEFAULT,
        y: DEFAULT,
        width: window.defaultWidth,
        height: window.defaultHeight,
      }}
      onDragStop={(e, d) => {
        e.stopPropagation();
        //setPosition({ x: d.x, y: d.y });
      }}
      allowAnyClick={false}
      onResizeStop={(e, direction, ref, delta, position) => {
        e.stopImmediatePropagation();
      }}
      enableResizing={window.allowResize}
      enableUserSelectHack={false}
      minWidth={250}
      style={{
        width: `${window.defaultWidth}`,
        zIndex: activeWindow?.id === window.id ? 50 : 49,
        pointerEvents:
          window.state === 'HIDDEN'
            ? 'none'
            : window.state !== 'MIN'
            ? 'auto'
            : 'none',
        maxHeight: 'content',
        maxWidth: '100%',
      }}
    >
      <div
        className={clsx(
          `flex h-full w-full flex-col gap-1 bg-[#cac6cb] p-[4px]`,
          activeWindow?.id === window.id ? 'z-50' : 'z-[49]',
          window.state === 'HIDDEN'
            ? 'pointer-events-none z-0 opacity-0'
            : window.state !== 'MIN'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        style={{
          boxShadow:
            'rgb(70, 65, 71) -1px -1px 0px 0px inset, rgb(222, 220, 222) 1px 1px 0px 0px inset',
        }}
      >
        <div
          className="handle flex w-full flex-row items-center justify-between px-1"
          style={{
            background:
              'linear-gradient(90deg, rgb(43 70 255), rgb(159 155 255), rgb(84 84 219), rgb(105 96 255))',
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <img
              src={window.icon}
              className="h-[16px]"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="select-none font-bold tracking-[-1px]">
              {window.name}
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            {(window.actions === 'ALL' || window.actions === 'MIN') && (
              <Button
                style={{ width: '18px', height: '18px' }}
                onClick={() => {
                  updateWindows(window, 'MINIMIZE');
                }}
              >
                <Minimize className={'h-3 w-3'} />
              </Button>
            )}
            {window.actions === 'ALL' && (
              <Button
                style={{ width: '18px', height: '18px' }}
                onClick={() => {
                  updateWindows(window, 'MAXIMIZE');
                }}
              >
                <Maximize className={'h-3 w-3'} />
              </Button>
            )}
            <Button
              style={{ width: '18px', height: '18px' }}
              onClick={() => {
                updateWindows(window, 'CLOSE');
              }}
            >
              <Close className={'h-3 w-3'} />
            </Button>
          </div>
        </div>
        {window?.top && window?.top()}
        {window.component}
      </div>
    </Rnd>
  );
};

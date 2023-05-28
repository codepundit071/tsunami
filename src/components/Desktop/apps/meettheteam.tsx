import React, { useState } from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';
import { ITeamMember, TEAM, TeamMember } from '../../team';

export const Meettheteam = () => {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-1 overflow-scroll bg-black px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
      }}
    >
      <div
        className="z-1 flex w-full flex-col gap-4 bg-black px-4 py-2 text-white"
        style={{
          boxShadow:
            'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
        }}
      >
        <img src="/meet_team.png" alt="" className='h-16 block mx-auto' />
        <div className='grid grid-cols-2 md:grid-cols-4 my-12 gap-5'>
          {TEAM.map((member: ITeamMember) => (
            <div
              key={member.name}
              className="group flex flex-col w-full items-center justify-between gap-6 overflow-hidden"
            >
              <img src={member.image} className="h-16 w-16" />
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'meettheteam',
  icon: '/desktopIcon/theteam.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
  history: [],
  name: 'TheTeam',
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
  component: <Meettheteam />,
};

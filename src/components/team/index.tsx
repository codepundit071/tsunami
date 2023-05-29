import React from 'react';

export interface ITeamMember {
  name: string;
  title: string;
  text: string;
  specialization: string;
  image?: string;
}

export const TeamMember = ({ name, title, text }: ITeamMember) => {
  return (
    <div className={'flex flex-col'}>
      <h1 className="text-xl font-bold uppercase">{name}</h1>
      <span className="text-sm leading-5 font-semibold my-2">{title}</span>
      <span
        className={'max-w-[200px] flex-1 text-sm'}
      >
        {text}
      </span>
    </div>
  );
};

export const TEAM: ITeamMember[] = [
  {
    name: 'Drifter ',
    title: 'Founder and Full Stack Developer',
    specialization: 'Full-Stack Development',
    text: ' Drifter, our visionary founder, brings extensive experience and expertise in full-stack development, ensuring our projects meet the highest standards of quality and functionality.',
    image: '/images/kanagawa.png',
  },
  {
    name: 'Tsunami',
    title: 'Community Head and Back-End Developer',
    specialization: 'Back-End Development',
    text: "Tsunami, our community-driven back-end developer, leads engagement and relationship-building efforts, ensuring a valuable and inclusive experience for our users and supporters.",
    image: '/images/drifter.png',
  },
  {
    name: 'Surfer',
    title: 'Outreach and Partnerships Manager',
    specialization: 'Business Development and Partnerships',
    text: "Surfer, our dynamic team member, drives outreach and strategic partnerships, expanding our network and forging alliances that drive growth and success.",
    image: '/images/surfer.png',
  },
  {
    name: 'Kanagawa',
    title: 'Full-Stack Developer and UI/UX Designer',
    specialization: 'Full-Stack Development, UI/UX Design',
    text: "Kanagawa excels in full-stack development and UI/UX design, ensuring seamless functionality and visually appealing designs for our projects. Our talented team combines their expertise to deliver exceptional results. With a strong foundation of skills and a shared commitment to excellence, we are poised for success and invite you to be a part of our journey.",
    image: '/images/kim.png',
  },
];

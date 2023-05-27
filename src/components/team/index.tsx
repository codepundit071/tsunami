import React from 'react';

export interface ITeamMember {
  name: string;
  title: string;
  text: string;
  image?: string;
}

export const TeamMember = ({ name, title, text }: ITeamMember) => {
  return (
    <div className={'flex flex-col'}>
      <h1 className="text-base font-bold">{name}</h1>
      {/* <span className="text-sm">{title}</span> */}
      <span
        className={'max-w-[200px] flex-1 text-justify text-xs'}
        style={{
          textAlignLast: 'justify',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const TEAM: ITeamMember[] = [
  {
    name: 'David Chen',
    title: 'Co-founder and Lead Cryptographer',
    text: ' A seasoned Full Stack Developer with a proven track record in developing and maintaining cutting-edge crypto trading platforms. With his extensive experience, David brings a deep understanding of the technical aspects and intricacies of the blockchain industry.',
    image: '/images/kanagawa.png',
  },
  {
    name: 'Dr. Sarah Lee',
    title: 'Co-founder',
    text: " An esteemed Cryptocurrency Economist who specializes in analyzing the economic impact of cryptocurrencies. Dr. Lee's expertise provides valuable insights into the financial dynamics of the crypto market, helping us shape effective strategies and solutions.",
    image: '/images/drifter.png',
  },
  {
    name: 'Mark Thompson',
    title: 'Senior Researcher',
    text: "A seasoned Blockchain Business Strategist with a wealth of experience in developing successful business strategies for blockchain projects. Mark's strategic vision and industry knowledge are instrumental in driving the growth and success of ZKTsunami.",
    image: '/images/surfer.png',
  },
  {
    name: 'Kevin Lee',
    title: 'Junior Researcher',
    text: "An experienced Cryptocurrency Trader with a strong background in trading and managing crypto assets. Kevin's expertise in the dynamic world of cryptocurrencies enables us to navigate the market effectively and make informed decisions.",
    image: '/images/kim.png',
  },
];

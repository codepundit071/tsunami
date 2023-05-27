import React from 'react';

export interface ITokenomicPoint {
  percent: string;
  amount: string;
  title: string;
}

export interface ITokenTeirPoint {
  percentRange: string;
  amountRange: string;
  desc: string;
}

export const TOKENOMIC_POINTS: ITokenomicPoint[] = [
  {
    percent: '12',
    amount: '600,000',
    title: 'Fundraising',
  },
  {
    percent: '4.8',
    amount: '240,000',
    title: 'The Team',
  },
  {
    percent: '3.2',
    amount: '160,000',
    title: 'The Foundation',
  },
];

export const TEIR_POINTS: ITokenTeirPoint[] = [
  {
    percentRange: '0.1% - 5%',
    amountRange: 'Discount',
    desc: ' Embrace the first tier and enjoy significant savings on transaction fees, reinforcing your privacy while optimizing your financial efficiency.',
  },
  {
    percentRange: '2% - 100%',
    amountRange: 'Discount',
    desc: 'Elevate your commitment to privacy with the second tier, where substantial discounts eliminate transaction fees, allowing you to transact freely and securely.',
  },
  {
    percentRange: '1.9% - 95% ',
    amountRange: 'Discount',
    desc: 'Join the privileged few in the third tier and experience remarkable savings as your $ZKT holdings grow, maximizing both privacy and financial advantages.',
  },
];

export const TokenomicPoint = ({ percent, amount, title }: ITokenomicPoint) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">{percent}%</h1>
      <p
        className="w-full text-justify text-lg"
        style={{
          textAlignLast: 'justify',
        }}
      >
        {amount} $ZKT
      </p>
      <p
        className="max-w-full text-justify text-lg"
        style={{
          textAlignLast: 'justify',
        }}
      >
        {title}
      </p>
    </div>
  );
};

export const TeirPoint = ({
  percentRange,
  amountRange,
  desc,
}: ITokenTeirPoint) => {
  return (
    <div className="group flex w-full justify-evenly border border-white first:border-b-0 last:border-t-0 odd:flex-row even:flex-row-reverse">
      <div className="flex flex-col items-center justify-center p-2">
        <h2 className="text-2xl font-bold">{percentRange}</h2>
        <p>{amountRange}</p>
      </div>
      <div className="h-full w-[1px] bg-white" />
      <p className="flex max-w-[50%] items-center text-center text-xs">
        {desc}
      </p>
    </div>
  );
};

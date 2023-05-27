import localFont from '@next/font/local';
import React from 'react';
import DekstopComputer from '../components/Desktop';
import { MobileScreen } from '../components/Mobile';
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}

const po = localFont({
  src: [
    {
      path: '../../public/fonts/po.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/po_bold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-po',
});

function Home({}: any) {
  return (
    <div
      className={`relative flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-hidden bg-black ${po.variable} font-po text-white`}
    >
      <div className="hidden h-full w-full lg:flex">
        <DekstopComputer />
      </div>
      <div className="flex h-full w-full lg:hidden">
        <MobileScreen />
      </div>
    </div>
  );
}

export default Home;

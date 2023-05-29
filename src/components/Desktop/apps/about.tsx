import React from 'react';
import { IWindow } from '../../../lib/hooks/useComputerState';
import { WebAddress } from '../webBar';

export const About = () => {
  return (
    <div
      className="flex h-full w-full items-start justify-center gap-1 overflow-scroll bg-[#131313] px-2 py-4 font-po text-sm font-normal text-white"
      style={{
        boxShadow:
          'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
        minHeight: 'content',
        backgroundPosition: '0 0',
        backgroundImage: '#131313',
      }}
    >
      <div className="flex flex-col items-center">
        <img src={'/images/about-hero-v1.png'} className={'w-[300px]'} />
        <h1 className="text-base font-bold text-[#0eb3ff]">Abstract</h1>
        <span
          className={'max-w-[300px] text-justify'}
          style={{
            textAlignLast: 'justify',
          }}
        >
          Zcash was the first to implement and apply ZK-SNARK in the
          decentralizedcryptocurrency. The relatively costly proof generation
          further reduces the likelihood of its adoption in practice. ZKTsunami
          implements and integrates the state-of-the-art setup-free
          zero-knowledge proof protocol to enable trustless anonymous payment
          for smart contract platforms. Our proposed ZK-AnonSNARK scheme also
          attains the optimal balance between performance and security, i.e.,
          almost constant proof size and efficient proof generation and
          verification. This will anonymize any cryptocurrency, including
          Bitcoin and Ethereum.
        </span>
        <h1 className="text-base font-bold text-[#0eb3ff]">Conclusion</h1>
        <span
          className={'mt-2 max-w-[300px] text-justify text-xs'}
          style={{
            textAlignLast: 'justify',
          }}
        >
          ZKTsunami provides an interoperable ecosystem for the anonymous
          digital assets derived from our ecosystem based on our design and
          implementation of advanced ZK-AnonSNARK technology.
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center border border-white/50 p-2">
          <h1 className="text-lg font-bold pb-4">
            <img src='/introduction.png' className='h-6' alt='introduction'/>
          </h1>
          <span
            className={'max-w-[800px] flex-1 text-justify'}
            style={{
              textAlignLast: 'justify',
            }}
          >
            Welcome to the world of ZKT, where digital privacy and security take center stage. Our vision is to empower individuals with cutting-edge solutions that prioritize their privacy and safeguard their sensitive information. At ZKT, we are passionate about redefining the digital landscape and ensuring that privacy becomes a fundamental right for everyone.
            Step into our innovative ecosystem and explore a range of transformative products that elevate your digital experience. With our flagship decentralized application, ZKT dApp, you can engage in on-chain activities with unparalleled security and anonymity. Say goodbye to worries and embrace a seamless, fear-free digital journey.
            Experience the true power of privacy with ZKTVPN, our state-of-the-art virtual private network. It not only conceals your online activities but also shields your location, making you untraceable and preserving your anonymity.
            Take control of your digital assets with ZKWallet, our secure and confidential digital wallet. Your transactions and identities remain hidden, ensuring that you have complete ownership and peace of mind.
            Ready to trade? Step into the realm of ZKSwap, our decentralized exchange platform that enables seamless and anonymous token swaps. With privacy at the forefront, your transactions remain confidential, providing you with enhanced security and peace of mind.
            At ZKT, we believe that privacy is not just a luxury; it's a necessity. Our mission is to revolutionize the digital landscape and make privacy accessible to all. Join us on this transformative journey as we redefine digital privacy and security, creating a world where your online presence remains truly yours.
            Welcome to ZKT, where privacy is paramount, and your digital world is secure.
          </span>
        </div>
      </div>
    </div>
  );
};

export const APP_CONFIG: IWindow = {
  id: 'about',
  icon: '/icons/favicon-128.png',
  defaultWidth: '1050px',
  defaultHeight: '600px',
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
  history: [],
  name: 'About',
  actions: 'ALL',
  extraAction: [],
  state: 'DEFAULT',
  component: <About />,
  top: () => (
    <WebAddress
      icon={APP_CONFIG.icon}
      address={'https://www.zktsunami.io/about.html'}
    />
  ),
};

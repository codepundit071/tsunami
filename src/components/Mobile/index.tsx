import clsx from 'clsx';
import React from 'react';
import { Close } from '../../icons/close';
import { Maximize } from '../../icons/maximize';
import { Minimize } from '../../icons/minimize';
import { Button } from '../button';
import { ITeamMember, TEAM, TeamMember } from '../team';
import {
  ITokenTeirPoint,
  ITokenomicPoint,
  TEIR_POINTS,
  TOKENOMIC_POINTS,
  TeirPoint,
  TokenomicPoint,
} from '../tokenomics';
import { Telegram } from '../../icons/telegram';
import { Twitter } from '../../icons/twitter';
import { Etherscan } from '../../icons/etherscan';
import Link from 'next/link';
import { APP_CONFIG as METAMASK_CONFIG } from '../Desktop/apps/connectionWizard';
import { AppIcon } from '../desktopApp';


export const MobileScreen = () => {
  const handleClick = (e: any) =>{
    e.target.parentElement.nextElementSibling.classList.toggle('h-0')
  }

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden overflow-y-hidden bg-black font-po font-bold text-black">
      <div
        className={clsx(`flex h-full w-full flex-col bg-[#cac6cb] p-[4px]`)}
        style={{
          boxShadow:
            'rgb(70, 65, 71) -1px -1px 0px 0px inset, rgb(222, 220, 222) 1px 1px 0px 0px inset',
        }}
      >
        {/* HANDLE */}
        <div
          className="handle flex w-full flex-row items-center justify-between px-1 shrink-0"
          style={{
            background:
              'linear-gradient(90deg, rgb(43 70 255), rgb(159 155 255), rgb(84 84 219), rgb(105 96 255))',
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <img
              src={'/icons/favicon-128.png'}
              className="h-[16px]"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="select-none font-bold tracking-[-1px] text-white">
              ZKTsunami \ $ZKT \ $PRICE
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Button
              style={{ width: '18px', height: '18px' }}
              onClick={() => {}}
            >
              <Close className={'h-3 w-3'} />
            </Button>
          </div>
        </div>
        {/* NAV */}
        <div className="flex flex-row items-center justify-center gap-2 px-2 text-sm">
          <a className="p-1" href={'#about'}>
            About
          </a>
          <a className="p-1" href={'#team'}>
            Team
          </a>
          <a className="p-1" href={'#tokenomics'}>
            Tokenomics
          </a>
          <a className="p-1" href={'#roadmap'}>
            Roadmap
          </a>
          <a
            className="p-1"
            href={'#utilities'}
          >
            Utilities
          </a>
        </div>
        {/* CONTENT */}
        <div
          className="flex h-full w-full flex-col items-center overflow-scroll bg-black font-po text-sm font-normal text-white"
          style={{
            boxShadow:
              'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
          }}
        >
          {/*ABOUT*/}
          <div
            id={'about'}
            className="flex w-full flex-row items-center justify-around px-2"
          >
            {/* <img src={'/icons/favicon-128.png'} className="h-[32px] w-[32px]" />
            <h1 className="text-3xl font-bold">ZKTsunami</h1>
            <img src={'/icons/favicon-128.png'} className="h-[32px] w-[32px]" /> */}
          </div>
          <div className="flex w-full flex-col px-4 bg-hero bg-cover">
            <h1 className="w-full text-center text-base font-bold">ZKT — Transforming DeFi into an Era of Utter Anonymity</h1>
            <span
              className={'max-w-full text-justify'}
              style={{
                textAlignLast: 'justify',
              }}
            >
              Welcome to ZKTsunami, where privacy takes center stage in the realm of decentralized finance (DeFi). Experience a revolutionary protocol that empowers you to transact with complete anonymity and security.
            </span>
            
            <div className="flex gap-4 justify-center pt-8">
              <Link href="https://app.uniswap.org/#/swap?outputCurrency=0x76fca1adb104770b38581b64d55e67fa5a0f3966">
                <Button><span className='font-semibold inline-block px-4'>Buy Now</span></Button>
              </Link>
              <Link href="http://dextools.io/app/ether/pair-explorer/0x8AeB846614f63342fdf2dB8865c930B5257F21f0">
                <Button><span className='font-semibold inline-block px-4'>Chart</span></Button>
              </Link>
            </div>

            <div className=' w-11/12 text-black bg-white/60 p-2 my-10'>
              <article className='bg-white border border-dashed border-black p-2'>
                <h1 className="w-full text-center text-base font-bold">Data Breaches and Privacy Issues Are Major Concerns in Crypto:</h1>
                <span>
                  In the world of blockchain, anonymity and security should be inherent. However, the reality is far from perfect. Transaction details can be traced due to the transparent nature of on-chain data, posing significant threats to data safety and on-chain privacy. To achieve mainstream adoption, everyone must feel secure in utilizing cryptocurrencies.
                </span>
              </article>
            </div>
          </div>
          {/* DOWNLOAD */}
          <div className="w-full px-4 py-8 bg-[#0c496d]">
            <h1 className="w-full text-center text-base font-bold">
              Download our latest beta versions
            </h1>
            <div className='flex justify-center pt-4'>
              <Link href="https://drive.google.com/file/d/1ytOgd1DRlt9b3IxmsJnE1IT5eym6batC/view">
                <Button>
                  <span className='font-bold px-4'>
                    ZKT VPN
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col px-4 py-8">
            <h1 className="w-full text-center text-base font-bold">
              Introduction
            </h1>
            <span
              className={'max-w-full text-justify text-base'}
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
          {/* WHAT YOU GET  */}
          <div className='bg-white text-black px-4 py-2 w-full'
          style={{
            boxShadow:
              'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
          }}
          >
            <h1 className='text-center font-bold text-2xl'>What you get</h1>
            <p className='text-center'>Our sustainable approach to ensuring privacy comes with boundless benefits for the community.</p>
            <article className='py-8 grid grid-cols-1 gap-4'>
              <div className="sc-iTFTee bxakLG relative p-6 bg-white shadow-xl">
                <div className="sc-jcMfQk p-4">
                  <fieldset aria-disabled="false" className="sc-AHaJN fPcCYc flex flex-col items-center ">
                    <legend className="sc-khsqcC kclVKU">Transaction Fees</legend>
                    <div className="sc-dkrFOg bTNoOe flex item-center mb-2" style={{background: "palevioletred"}}>
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect className="fill-current " width="64" height="64" rx="32" color="#060084"></rect>
                        <g strokeWidth="2">
                          <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"></path>
                          <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8"></path>
                          <path className="stroke-current text-blue-300" stroke-linecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429"></path>
                          <path className="stroke-current text-white" stroke-linecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429"></path>
                          </g>
                        </svg>
                        </div>
                        <p className="text-gray-800 text-center">You will need $ZKT to cover for your fees when you are mixing crypto.</p>
                  </fieldset>
                </div>
              </div>
              <div className="sc-iTFTee bxakLG relative p-6 bg-white shadow-xl">
                <div className="sc-jcMfQk dIfXfB p-4">
                  <fieldset aria-disabled="false" className="sc-AHaJN fPcCYc flex flex-col items-center ">
                    <legend className="sc-khsqcC kclVKU">DAO Voting Power</legend>
                    <div className="sc-dkrFOg bTNoOe flex item-center mb-2" style={{background: "palevioletred"}}>
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect className="fill-current " width="64" height="64" rx="32" color="#060084"></rect>
                        <g strokeWidth="2" transform="translate(19.429 20.571)">
                          <circle className="stroke-current text-white" stroke-linecap="square" cx="12.571" cy="12.571" r="1.143"></circle>
                          <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"></path>
                          <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-center">$ZKT will give members voting power on the future decisions of the DAO.</p>
                  </fieldset>
                </div>
              </div>
              <div className="sc-iTFTee bxakLG relative p-6 bg-white shadow-xl">
                <div className="sc-jcMfQk p-4">
                  <fieldset aria-disabled="false" className="sc-AHaJN fPcCYc flex flex-col items-center ">
                    <legend className="sc-khsqcC kclVKU">Staking for Rewards</legend>
                    <div className="sc-dkrFOg bTNoOe flex item-center mb-2" style={{background: "palevioletred"}}>
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect className="fill-current" width="64" height="64" rx="32" color="#060084"></rect>
                        <g stroke-linecap="square" strokeWidth="2">
                          <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"></path>
                          <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-center">Rewards for long term holders who believe in our philosophy.</p>
                  </fieldset>
                </div>
              </div>
            </article>
          </div>
          {/*TEAM*/}
          <div
            className="z-1 flex w-full flex-col gap-4 bg-[#FBFF49] px-4 py-2 text-black"
            id={'team'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <h1 className="w-full text-center text-base font-bold">
              <img src='/meet_team.png' alt='Meet team' className='h-4 block mt-4 mx-auto' />
            </h1>
            {TEAM.map((member: ITeamMember) => (
              <div
                key={member.name}
                className="group flex w-full items-center justify-between gap-6 odd:flex-row-reverse even:flex-row"
              >
                <img src={member.image} className="h-16 w-16" />
                <TeamMember {...member} />
              </div>
            ))}
            <p className='leading-normal text-justify text-bold'>Together, our talented team combines technical prowess, economic analysis, strategic thinking, and trading expertise to deliver innovative solutions that prioritize privacy and security in the decentralized finance landscape.</p>
          </div>
          {/* UTILITIES  */}
          <div id='utilities'>
            <h1 className='text-base text-[#0eb3ff] font-bold text-center pt-4'>UTILITY</h1>
            <section className='mt-6 pb-4'>
              <ul className='flex flex-wrap justify-center'>
                <li className='py-4 px-2 md:px-6 w-full md:w-1/3 shrink-0'>
                  <article className='text-center'>
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_5.gif" className='h-20 md:h-28 block mx-auto' alt="" />
                    <h4 className='font-semibold text-2xl'>ZKT DApp</h4>
                    <p className=''>ZkDapp serves as our flagship product, functioning as an advanced mixer within the ZKTsunami ecosystem. With a strong emphasis on privacy, ZkDapp enables users to mix ERC-20 tokens securely and anonymously. It sets itself apart from competitors by offering unparalleled privacy features and ensuring that users’ transactions cannot be traced back to their original source. Once completion of the ERC-20 mixer has been reached, we will then be able to expand at a faster rate to achieve a multi-chain mixer.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-full md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_3.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK VPN</h4>
                    <p> ZkVPN is a privacy-focused virtual private network (VPN) solution currently undergoing beta testing. We have procured 40 servers worldwide to ensure optimal performance and global accessibility. Unlike conventional VPN services, ZkVPN places utmost importance on preserving complete user privacy. It employs cutting-edge technologies that eliminate the need for users to provide any personal information during sign-up. Instead, ZkVPN generates a unique ID for each user, allowing for anonymous usage. Payments for the service can be made using cryptocurrency, further enhancing privacy. ZkVPN does not track stable IP addresses, ensuring that users’ online activities remain completely confidential. It is designed to be cross-platform, available as a web app, Mac OS X, Windows, and Chrome extension. Additionally, ZkVPN will be accessible via mobile apps on Android (through the Google Play Store) and iOS devices. It is important to note that all revenue generated by these products will be distributed to $ZKT stakers, aligning our ecosystem’s growth with the interests of our community.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-full md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_4.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK SWAP</h4>
                    <p>ZKswap is a decentralized exchange (DEX) platform within the ZKTsunami ecosystem, enabling users to swap tokens seamlessly and anonymously. It sets itself apart from other DEX platforms by prioritizing privacy and anonymity. ZKswap ensures that transaction histories remain private, providing users with enhanced security and confidentiality when trading tokens.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-full md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK Wallet</h4>
                    <p>Zkwallet is a secure and private digital wallet designed to safeguard users’ assets. By leveraging advanced cryptographic techniques, Zkwallet ensures that users have full control over their funds while maintaining complete privacy. Unlike traditional wallets, Zkwallet implements robust privacy measures to protect user identities, transaction histories, and asset holdings.</p>
                  </article>
                </li>
                <li className='py-4 px-2 md:px-6 w-full md:w-1/3 shrink-0'>
                  <article className="text-center">
                    <img src="/animation/62248_animation_of_btc_bitcoin_button_icon_2.gif" className='h-20 block mx-auto' alt="" />
                    <h4 className="font-semibold text-2xl">ZK Browser</h4>
                    <p>ZkBrowser is a comprehensive private browser designed to protect users’ online privacy. By blocking trackers, removing cookies, and preventing data leakage, ZkBrowser ensures that users can browse the internet without leaving any digital footprints. It distinguishes itself from competitors by providing a fully private browsing experience, shielding users from intrusive tracking and data collection.</p>
                  </article>
                </li>
              </ul>
            </section>
          </div>
          {/*TOKENOMICS*/}
          <div
            className="relative flex w-full flex-col gap-4 bg-black px-4 py-2 text-white"
            id={'tokenomics'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <img
              src={'/images/token-topper-v1.png'}
              className="absolute top-[2px] left-[2px] w-[99%]"
            />
            <div className="relative z-10 mb-8 flex flex-col gap-4">
              <h1 className="w-full text-center text-base font-bold">
                Tokenomics
              </h1>
              <span
                className={'max-w-full text-justify'}
                style={{
                  textAlignLast: 'justify',
                }}
              >
                The ZKTsunami DApp introduces a community-centric fee structure that reflects our commitment to the interests of our users. We believe in rewarding loyalty and providing incentives for privacy-conscious individuals.
                <br />
                <br />
                Unlock the benefits of holding $ZKT as it grants you exclusive discounts based on your investment:
              </span>
              <div className="flex w-full items-center">
                <h1 className="w-full text-center text-base font-bold">
                  Distribution
                </h1>
              </div>
              <div className="flex w-full items-center justify-center bg-white text-lg font-bold text-black">
                5,000,000 $ZKT
              </div>
              <div className="flex flex-row items-center justify-between">
                {TOKENOMIC_POINTS.map((point: ITokenomicPoint, index) => {
                  return <TokenomicPoint key={index} {...point} />;
                })}
              </div>
              <div className="flex w-full items-center">
                <h1 className="w-full text-center text-base font-bold">
                  Token Tier System
                </h1>
              </div>
              <div className="flex flex-col items-center justify-between">
                {TEIR_POINTS.map((point: ITokenTeirPoint) => {
                  return <TeirPoint key={point.amountRange} {...point} />;
                })}
              </div>
            </div>
            <img
              src={'/images/token-topper-v1.png'}
              className="absolute bottom-[2px] left-[2px] w-[99%] rotate-180"
            />
          </div>
          {/*ROADMAP*/}
          <div
            className="z-1 flex w-full flex-col gap-4 bg-white px-4 py-2 text-black"
            id={'roadmap'}
            style={{
              boxShadow:
                'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
            }}
          >
            <h1 className="w-full text-center text-base font-bold">Roadmap</h1>
            <div>
              <article className='w-[300px] mx-auto'>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Phase 1:</h4>
                  <ul>
                    <li>* Launch ZKTsunami</li>
                    <li>* Whitepaper release</li>
                    <li>* Hold AMAs discussing on the project</li>
                    <li>* Inject 100k+ into the liquidity</li>
                    <li>* Build a concept and community around privacy </li>
                  </ul>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Phase 2: (Q2 2023)</h4>
                  <ul>
                    <li>* Launch secure ZkVPN</li>
                    <li>* Conduct extensive testing</li>
                    <li>* Seamless integration into web ecosystem</li>
                    <li>* Improve user interface</li>
                    <li>* Provide multi-platform support</li>
                    <li>* Launch V2 website</li>
                  </ul>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Phase 3: (Q3 2023)</h4>
                  <ul>
                    <li>* In-development and launch Mixer feature</li>
                    <li>* Thorough testing and security audits</li>
                    <li>* Implement advanced encryption techniques</li>
                    <li>* Enable integration with cryptocurrencies</li>
                    <li>* Customizable mixing options</li>
                  </ul>
                </div>
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Phase 4: (Q4 2023)</h4>
                  <ul>
                    <li>* Develop and refine Privacy Swap feature</li>
                    <li>* Rigorous testing and security audits</li>
                    <li>* Implement automated privacy protocols</li>
                    <li>* Support wide range of tokens</li>
                    <li>* Real-time transaction monitoring</li>
                  </ul>
                </div> 
                <div className='tokenomics'>
                  <h4 className='font-semibold'>Phase 5: (Q1: 2024)</h4>
                  <ul>
                    <li>* Develop and release Privacy Wallet</li>
                    <li>* Thorough testing and security audits</li>
                    <li>* Protections Shielded Against Hackers, Exploiters, and Bad Actors on Network</li>
                    <li>* ZKTsunami Polygon & FTM Launch</li>
                    <li>* Implement advanced encryption</li>
                    <li>* Integrate Binance Smart Chain (BSC)</li>
                    <li>* Easy token management within the Privacy Wallet</li>
                  </ul>
                </div> 
              </article>
            </div>
          </div>
          {/*FAQ*/}
          <section
             className="relative flex w-full flex-col gap-4 pb-10 bg-black px-4 py-2 text-white"
             id={'tokenomics'}
             style={{
               boxShadow:
                 'inset -1px -1px 0 0 #dedcde, inset 1px 1px 0 0 #a099a1, inset -2px -2px 0 0 #cac6cb, inset 2px 2px 0 0 #464147',
             }}
          >
            <h1 className="w-full text-center text-base font-bold">FAQ</h1>
            <article className="faq">
              <div>
                <p className="question">In simple words, what exactly is ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0"> ZKTsunami is a secure blockchain platform that allows you to mix your crypto, ensuring maximum privacy and anonymity.</p>
              </div>

              <div>    
                <p className="question">What is the main essence of ZK in ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0">ZK stands for "zero-knowledge," a cryptography algorithm that enables verification without disclosing intricate details. It empowers you to prove ownership or knowledge without revealing specific transaction details.</p>
              </div>

              <div>    
                <p className="question">How does the tier system work on ZKTsunami? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer h-0">The tier system rewards $ZKT token holders with exclusive fee discounts. The more $ZKT you hold, the lower your transaction fees, providing enhanced benefits for your commitment to privacy.</p>  
              </div>

              <div>    
                <p className="question">Why should I use ZKTsunami instead of other mixers? <span onClick={handleClick} className="opener">+</span></p>
                <p className="answer  h-0">ZKTsunami stands out with its user-friendly interface, lightning-fast speed, uncompromising privacy, and optimal efficiency. Experience the unparalleled advantages of our privacy protocol, setting a new standard in the world of decentralized finance.</p>  
              </div>
            </article>
          </section>
          {/* Footer  */}
          <footer>
            <div className='flex flex-row items-cente justify-center gap-8 px-2 py-3 text-sm shrink-0'>
              <a href='https://t.co/UeO1ZhEB8E'>
                <Telegram className={'h-5 w-5'} />
              </a>
              <a href="https://twitter.com/ZKTsunami">
                <Twitter className={'h-5 w-5'} />
              </a>
              <a href="https://etherscan.io/token/0x76fca1adb104770b38581b64d55e67fa5a0f3966">
                <Etherscan className={'h-5 w-5'} />
              </a>
            </div>
            <div className='flex flex-row items-center gap-8 px-2 py-3 text-sm shrink-0'>
              <a href='https://www.zktsunami.io/ZKTsunami_whitepaper_v1.0.pdf'>
                Whitepaper
              </a>
              <a href="https://www.zktsunami.io/ZKTsunami_yellowpaper_v1.0.pdf">
                Yellowpaper
              </a>
              <a href="mailto:info@zktsunami.io">
                contact
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

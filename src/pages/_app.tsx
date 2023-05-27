import 'focus-visible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../styles/tailwind.css';
import { ComputerStateProvider } from '../lib/hooks/useComputerState';
import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultProvider } from 'ethers';
import localFont from '@next/font/local';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export default function App({
  Component,
  pageProps,
}: AppProps & { err: Error }) {
  return (
    <WagmiConfig client={client}>
      <ComputerStateProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ComputerStateProvider>
    </WagmiConfig>
  );
}

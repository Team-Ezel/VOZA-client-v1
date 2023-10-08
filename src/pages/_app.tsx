import { RecoilRoot } from 'recoil'
import GlobalStyle from '@/styles/globals'
import type { AppProps } from 'next/app'
import InitMocks from "@/mocks";

InitMocks();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

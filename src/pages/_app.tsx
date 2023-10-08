import { RecoilRoot } from 'recoil'
import GlobalStyle from '@/styles/globals'
import Layout from '@/layout'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

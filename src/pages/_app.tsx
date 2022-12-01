import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import config from '../seo/config'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </>
  )
}

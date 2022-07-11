import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>sample pwa nextjs</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/watermelon72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icons/watermelon96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

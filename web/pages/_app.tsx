import '../styles/globals.css'
import type { AppProps } from 'next/app'
import create from 'zustand'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

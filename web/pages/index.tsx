import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
      </Head>

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold font-lobster">
          <span className="text-tw-orange">think</span>within
        </h1>
      </div>
    </div>

  )
}

export default Home

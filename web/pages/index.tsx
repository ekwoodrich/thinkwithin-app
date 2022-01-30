import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold font-lobster">
          <span className="text-tw-orange">think</span>within
        </h1>
        <br/>
        <p className='font-opensans'>What are you thinking about?</p>
        <textarea autoFocus className="mt-5 border-solid border-2 border-grey-500">

        </textarea>
        </div>
      </div>
    </div>

  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold font-lobster">
            <span className="text-tw-orange">think</span>within
          </h1>
          <br />
          <p className='font-opensans'>What are you thinking about?
          </p>
          <textarea autoFocus className="mt-5 w-96	">
          </textarea>
        </div>
      </div>
      <div className="absolute bottom-5 w-full	">
        <div className="flex items-center justify-center ">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </div>
      </div>
    </div>

  )
}

export default Home

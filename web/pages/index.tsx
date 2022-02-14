import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChevronCircleUp,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import NoteInput from '../components/NoteInput'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      
      <div className="absolute top-5 w-full	">
        <div className="flex items-center justify-center ">
          <Link href="/tags">
            <FontAwesomeIcon icon={faChevronCircleUp} />
          </Link>
        </div>
      </div>
      <NoteInput />

      <div className="absolute bottom-5 w-full	">
        <div className="flex items-center justify-center ">
          <Link href="/list">
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const List: NextPage = () => {
    return (
        <div>
            <div className="absolute top-5 w-full	">
                <div className="flex items-center justify-center ">
                    <Link href="/">
                        <FontAwesomeIcon icon={faChevronCircleDown} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default List

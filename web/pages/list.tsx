import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
// @ts-ignore
import useKeypress from 'react-use-keypress';
import { useRouter } from 'next/router';

const List: NextPage = () => {
    const router = useRouter();
    useKeypress('ArrowUp', () => {
        console.log("ArrowUp")
        router.push('/')
      });
    return (
        <div>
            <div className="absolute top-5 w-full	">
                <div className="flex items-center justify-center ">
                    <Link href="/">
                        <FontAwesomeIcon icon={faChevronCircleUp} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default List

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

const Tags: NextPage = () => {
    const router = useRouter();
    useKeypress('ArrowDown', () => {
        console.log("ArrowDown")
    router.push('/')
    });
    
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="absolute bottom-5 w-full	">
                <div className="flex items-center justify-center ">
                    <Link href="/">
                        <FontAwesomeIcon icon={faChevronCircleDown} />
                    </Link>
                </div>
            </div>
            Tags
        </div>

    )
}

export default Tags

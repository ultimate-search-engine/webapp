//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useRouter} from "next/router";
import Form from "../components/form";

function Home() {

    return (
        <div className={styles.container}>
              <Head>
                    <title>ultimEngine</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
              </Head>
            <main className={styles.main}>
                <div className={styles.main_div}>
                    <span className={styles.logo}>
                        <Image src="/logo-t.svg" alt="Out logo" width={144} height={32} />
                    </span>
                    <Form/>
                </div>
            </main>
        </div>
    )
}

// export async function getStaticProps(){
//
// }


export default Home

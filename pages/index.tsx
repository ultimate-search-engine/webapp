import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Form from "../components/form";
import {theme_changer} from "../scripts/theme_changer";
import Header from "../components/header";

function Home() {

    if (typeof window !== 'undefined') {
        let temp = localStorage.getItem('theme')
        theme_changer(temp)
    }

    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <div className={styles.main_div}>
                    <span className={styles.logo}>
                        <Image className={styles.svg} src="/logo.svg" alt="Out logo" width={144} height={32}/>
                    </span>
                    <Form/>
                </div>
            </main>
        </div>
    )
}

export default Home

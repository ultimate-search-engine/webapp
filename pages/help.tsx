import styles from "../styles/Help.module.scss";
import Head from "next/head";
import Image from "next/image";
import Form from "../components/form";

function Help() {
    const handsome = 1
    return (
        <div className={styles.container}>
            <Head>
                <title>ultimEngine Help</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <div className={styles.buttons}>
                        <button>Settings</button>
                        <button>About</button>
                        {handsome ? <Form/> : <p><b>cum</b></p>}
                    </div>
                </div>
                <div className={styles.content}>

                </div>
            </main>
        </div>
    )
}

export default Help
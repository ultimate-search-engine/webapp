import styles from "../styles/Settings.module.scss"
import Image from "next/image"
import {useRouter} from "next/router";

function Settings() {

    const router = useRouter()
    const onClickedButton = async (event: any) => {
        event.preventDefault()
        await router.push({
                pathname: '/about'
            },
        )
    }

    return (
        <div className={styles.button}>
            <Image src={"/gear.svg"} width={32} height={32} onClick={onClickedButton} className={styles.svg}/>
        </div>
    )
}

export default Settings

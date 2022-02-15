import styles from "../styles/Suggester.module.scss"
import Link from "next/link"

function Suggester(props: any) {
    return (
        <div className={styles.suggest_container}>
            <Link href={"search/?q=" + props.data[0].query}>
                <p className={styles.result_h}>{props.data[0].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[1].query}>
                <p className={styles.result_h}>{props.data[1].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[2].query}>
                <p className={styles.result_h}>{props.data[2].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[3].query}>
                <p className={styles.result_h}>{props.data[3].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[4].query}>
                <p className={styles.result_h}>{props.data[4].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[5].query}>
                <p className={styles.result_h}>{props.data[5].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[6].query}>
                <p className={styles.result_h}>{props.data[6].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[7].query}>
                <p className={styles.result_h}>{props.data[7].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[8].query}>
                <p className={styles.result_h}>{props.data[8].query}</p>
            </Link>
            <Link href={"search/?q=" + props.data[9].query}>
                <p className={styles.result_h}>{props.data[9].query}</p>
            </Link>
        </div>
    )
}

export default Suggester

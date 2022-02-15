import styles from "../styles/Result.module.scss"
import Link from "next/link"
import Image from "next/image";

function Result(props: any) {
    return (
        <div className={styles.result_div}>
            {/*<img src={props.data.openGraphImgURL} height={64}/>*/}
             <a href={props.data.url}>
                 <h1 className={styles.result_h}>{props.data.title}</h1>
             </a>
             <a href={props.data.url}>
                 <h2 className={styles.result_l}>{props.data.url}</h2>
             </a>
             <p className={styles.result_d}>{props.data.description}</p>
         </div>
    )
}

export default Result

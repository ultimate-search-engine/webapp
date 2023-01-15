import styles from "../styles/Result.module.scss"
import {ResultType} from "../scripts/interfaces"


function Result(props: { data: ResultType }) {
    return (
        <div className={styles.result_div}>
            <a href={props.data.url}>
                <h1 className={styles.result_h}
                    style={props.data.description ? {} : {color: "grey"}}>{props.data.title}</h1>
            </a>
            <a href={props.data.url}>
                <h2 className={styles.result_l}>{props.data.url_cut}</h2>
            </a>
            <p className={styles.result_d}>{props.data.description ? props.data.description : "This site has no description"}</p>
        </div>
    )
}

export default Result

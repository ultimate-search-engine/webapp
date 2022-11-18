import styles from "../styles/Result.module.scss"

function Result(props: any) {
    return (
        <div className={styles.result_div}>

            <a href={props.data.url}>
                <h1 className={styles.result_h}
                    style={props.data.description ? {} : {color: "grey"}}>{props.data.title}</h1>
            </a>
            <a href={props.data.url}>
                <h2 className={styles.result_l}>{props.data.url_cut}</h2>
            </a>
            <p className={styles.result_d}>{props.data.status == "Crawled" ? (props.data.description ? props.data.description : "This site has no description") : "This site was not Crawled yet, that's why there's no data showing"}</p>
        </div>
    )
}

export default Result

import styles from "../styles/Hint.module.scss"

function Hint(props: any) {
    return (
        <div className={styles.hint_div}>
            <a href={props.data.wiki}><h1 className={styles.hint_h}>{props.data.title}</h1></a>
            <a href={props.data.wiki}><p className={styles.hint_qdesc}>{props.data.category}</p></a>
            <hr className={styles.thin}/>
            <a className={styles.hint_link} href={props.data.web}>{props.data.website_cut}</a>
            <p className={styles.hint_desc}>{props.data.description}<br/><a href={props.data.wiki}>Wikipedia</a></p>
        </div>
    )
}

export default Hint

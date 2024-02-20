import styles from "./styles/Noresult.module.scss"

function Noresult() {
    return (
        <div className={styles.noresult_div}>
            <p className={styles.noresult_p}>Sorry! We couldn't find any other relevant results</p>
        </div>
    )
}

export default Noresult

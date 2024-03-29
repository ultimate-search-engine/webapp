import styles from "./styles/Footer.module.scss"
import Page_link from "./page_link";
// import {useRouter} from "next/router";

function Footer(props: { data: number, results: number }) {
    // const router = useRouter()
    // const query = router.query

    // let queries = []
    // for (let i = 0; i < 10; i++) {
    //     if (props.data == 0) {
    //         queries.push(props.data + i)
    //     } else if (props.data == 1) {
    //         queries.push(props.data + i - 1)
    //     } else {
    //         queries.push(props.data + i - 2)
    //     }
    // }
    //
    // if (queries.indexOf(1) == -1 || queries.indexOf(1) == 0) {
    //     queries.splice(0, 0, 0)
    // }

    return (
        <footer>
            <div className={styles.pagination}>
                {/*{queries.map((element: number, i: number) => {*/}
                {/*    return (<Page_link data={element} key={i}/>)*/}
                {/*})}*/}
                <Page_link data={props.data} results={props.results}/>
            </div>
        </footer>
    )
}

export default Footer

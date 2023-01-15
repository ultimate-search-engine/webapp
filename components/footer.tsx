import styles from "../styles/Footer.module.scss"
import React from "react";
import Page_link from "./page_link";
import {ParsedUrlQuery} from "querystring";

function Footer(props: { data: number }) {

    let queries = []
    for (let i = 0; i < 10; i++) {
        if (props.data == 0) {
            queries.push(props.data + i)
        } else if (props.data == 1) {
            queries.push(props.data + i - 1)
        } else {
            queries.push(props.data + i - 2)
        }
    }

    if (queries.indexOf(1) == -1 || queries.indexOf(1) == 0) {
        queries.splice(0, 0, 0)
    }

    return (
        <footer>
            <div className={styles.pagination}>
                {queries.map((element: number, i: number) => {
                    return (<Page_link data={element} key={i}/>)
                })}
            </div>
        </footer>
    )
}

export default Footer

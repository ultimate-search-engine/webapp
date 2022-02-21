import styles from "../styles/Footer.module.scss"
import Link from "next/link";
import Result from "./result";
import React from "react";
import Page_link from "./page_link";

function Footer(props:any){

    let queries = []
    let i = 0;
    let j = 0;

    do {
        let temp
        queries.push(props.data.pagination)
        temp = parseInt(queries[i]) + (-2 + i + j)
        if (temp > 0){
            queries[i] = temp
            i++
        } else {
            j++
        }
    } while (i < 8 && j < 3)

    return(
        <footer>
            <div className={styles.pagination}>
                {queries.map((element: any, i:number) => {return(<Page_link data={element} key={i}/>)})}
            </div>
        </footer>
    )
}

export default Footer
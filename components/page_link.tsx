import styles from "../styles/Page_link.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

function Page_link(props: { data: number, results: number }) {

    const router = useRouter()
    const query = router.query

    return (
        // <Link href={{
        //     pathname: 'search',
        //     query: {q: query.q, length: query.length, pagination: (props.data)}
        // }}>
        //     <p className={query.pagination == (props.data.toString()) ? styles.page_this : styles.page}>{props.data + 1}</p>
        // </Link>
        <>
            {props.data ? (
                <>
                    <Link href={{
                        pathname: 'search',
                        query: {q: query.q, length: query.length, pagination: (props.data - 1)}
                    }}>
                        <p className={styles.page}>{'<= Back'}</p>
                    </Link>
                    <span style={{width: '5px'}}></span>
                </>) : null}
            {props.results && props.results >= 20 ? <>
                <span style={{width: '5px'}}></span>
                <Link href={{
                    pathname: 'search',
                    query: {q: query.q, length: query.length, pagination: (props.data + 1)}
                }}>
                    <p className={styles.page}>{'Next =>'}</p>
                </Link>
            </> : null}
        </>
    )
}

export default Page_link

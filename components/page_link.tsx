import styles from "../styles/Page_link.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

function Page_link(props:any){

    const router = useRouter()
    const query = router.query

    return(
        <Link href={{
            pathname:'search',
            query:{q: query.q, length: query.length, index: query.index, pagination: props.data, lang: query.lang}
        }}>
            <p className={query.pagination == props.data ? styles.page_this : styles.page}>{props.data}</p>
        </Link>
    )
}

export default Page_link
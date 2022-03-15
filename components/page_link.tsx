import styles from "../styles/Page_link.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

function Page_link(props:any){

    const router = useRouter()
    const query = router.query

    console.log(query.pagination, props.data)

    return(
        <Link href={{
            pathname:'search',
            query:{q: query.q, length: query.length, pagination: (props.data)}
        }}>
            <p className={query.pagination == (props.data) ? styles.page_this : styles.page}>{props.data + 1}</p>
        </Link>
    )
}

export default Page_link
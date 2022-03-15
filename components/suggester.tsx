import styles from "../styles/Suggester.module.scss"
import {useRouter} from "next/router";

function Suggester(props: { data: { element: string, state: any } }) {

    const router = useRouter()

    const pushSuggest = async (e: any) => {
        e.preventDefault()
        console.log("hey ", props.data.element)
        props.data.state(props.data.element)
        await router.push({
                pathname: '/search',
                query: {q: props.data.element, length: 16, pagination: "0"}
            },
        )
    }

    return (
        <p className={styles.link} onClick={pushSuggest}>{props.data.element}</p>
    )
}

export default Suggester

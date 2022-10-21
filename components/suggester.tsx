import styles from "../styles/Suggester.module.scss"
import {useRouter} from "next/router";
import React from "react";

function Suggester(props: { data: { element: string, state: React.Dispatch<React.SetStateAction<string | string[]>>, input: React.RefObject<HTMLInputElement>, suggests: React.Dispatch<React.SetStateAction<string[]>> } }) {

    const router = useRouter()

    const pushSuggest = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.data.state(props.data.element)
        props.data.input.current?.focus()
        props.data.suggests([])
        await router.push({
                pathname: '/search',
                query: {q: props.data.element, length: 16, pagination: "0"}
            },
        )
    }

    return (
        <p className={styles.link} onClick={pushSuggest} tabIndex={0}>{props.data.element}</p>
    )
}

export default Suggester

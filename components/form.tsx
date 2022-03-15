import styles from "../styles/Form.module.scss"
import {useRouter} from "next/router";
import Image from "next/image";
import Suggester from "./suggester";
import React, {useState} from 'react'

function Form(props: any) {

    const router = useRouter()
    const submitSearch = async (event: any) => {
        event.preventDefault()
        await router.push({
                pathname: '/search',
                query: {q: event.target.elements.search.value, length: 16, pagination: "0"}
            },
        )
    }

    const [userQ, setUserQ] = useState(router.query.q)

    let suggestsq: string[] = []

    const [suggests, setSuggests] = useState<Array<string>>([])

    const onInputChng = async (event: any) => {
        setUserQ(event.target.value)
        //send data to Vojta
        if (event.target.value.length > 2) {
            suggestsq = [
                "iservery",
                "welcome",
                "ts vs js",
                "nextjs docs",
                "skolaonline",
                "velky krtkus",
                "why not to use any in ts",
                "nfs neni need for speed",
                "what is kvadrant",
                "how to center a div",
            ]
            setSuggests(suggestsq)
        } else {
            setSuggests([])
        }
    }

    const onInputFocusOut = async (event: any) => {
    }

    return (
        <>
            <div className={styles.search}>
                <form className={styles.form} onSubmit={submitSearch}>
                    <input id="search" name="search" placeholder="Search..." required={true} autoComplete={"off"}
                           value={userQ} onChange={onInputChng} onBlur={onInputFocusOut}/>
                    <button type="submit"><Image src="/magnifying_glass.svg" alt="search" width={19} height={19}/>
                    </button>
                </form>
            </div>
            <div className={styles.suggest_container}>
                {suggests.map((element, i) => {
                    return (<Suggester data={{"element": element, "state": setUserQ}} key={i}/>)
                })}
            </div>
        </>
    )
}

export default Form

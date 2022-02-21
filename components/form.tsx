import styles from "../styles/Form.module.scss"
import {useRouter} from "next/router";
import Image from "next/image";
import Suggester from "./suggester";
import {receiveMessageOnPort} from "worker_threads";
import { useState } from 'react'

function Form (props: any) {
    const router = useRouter()
    const submitSearch = async (event:any) => {
        event.preventDefault()
        await router.push({
            pathname: '/search',
            query: {q: event.target.elements.search.value, length: 16, index: "se14", pagination: "1", lang: "en"}
            },
        )
    }

    const [userQ, setUserQ] = useState(router.query.q)

    const onInputChng = async (event:any) => {
        setUserQ(event.target.value)
        //send data to Vojta
    }

    const onInputFocus = async (event:any) => {
        //resize
    }

    return (
        <div className={styles.search}>
            <form className={styles.form} onSubmit={submitSearch}>
                <input id="search" name="search" placeholder="Search..." required={true} autoComplete={"off"} value={userQ} onChange={onInputChng} onFocus={onInputFocus}/>
                <button type="submit"><Image src="/magnifying_glass.svg" alt="search" width={19} height={19}/></button>
            </form>
            {/*<Suggester data={props.data}/>*/}
        </div>
    )
}

export default Form

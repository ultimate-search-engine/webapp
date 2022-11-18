import styles from "../styles/Form.module.scss"
import {useRouter} from "next/router";
import Image from "next/image";
import Suggester from "./suggester";
import React, {useState} from 'react'

function Form() {
    const router = useRouter()
    const submitSearch = async (event: any) => {
        event.preventDefault()
        await router.push({
                pathname: '/search',
                query: {q: event.target.elements.search.value, length: 16, pagination: "0"}
            },
        )
    }

    const [userQ, setUserQ] = useState(router.query.q ? router.query.q : "")

    const [suggests, setSuggests] = useState<Array<string>>([])

    let suggests_q: string[] = []

    const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserQ(event.target.value)
        // const res = await fetch(`http://10.3.106.157:8000/suggest/${userQ}`)
        // const data = await res.json()
        // console.log(data)
//        const res = await fetch('http://localhost:1216/request?' + new URLSearchParams({
//            q: event.target.value
//        }))
//        const data = await res.json()
//        console.log(data)

//        let theme = document.querySelector(':root')
//
//        if (event.target.value.search("gay") != -1){
//            if (theme){
//                theme.style.setProperty('--var_background-color', `rgba(${Math.random() * (255)},${Math.random() * (255)},${Math.random() * (255)}, 1)`)
//            }
//        } else {
//            if (theme){
//                theme.style.setProperty('--var_background-color', `rgba(255,255,255,1)`)
//            }
//        }




        if (event.target.value.length > 2) {
            suggests_q = [
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
            setSuggests(suggests_q)
        } else {
            setSuggests([])
        }
        changeClass()
    }

    const onInputFocusOut = async (event: React.FocusEvent<HTMLElement>) => {
        const activeNode = event.relatedTarget
        if (activeNode) {
            if (activeNode.className.substring(0, 7) != "Suggest") {
                setSuggests([])
                changeClass()
            }
        } else {
            setSuggests([])
            changeClass()
        }
    }

    const input = React.useRef<HTMLInputElement>(null);
    React.useEffect(() => {
        if (input.current) {
            input.current.focus()
        }
    }, []);

    const changeClass = () => {
        let input = document.getElementById('search')
        let button = document.getElementById('submit')
        if (input && button && suggests_q.length) {
            input.style.borderRadius = "24px 0px 0px 0px"
            button.style.borderRadius = "0px 24px 0px 0px"
        } else if (input && button && !suggests_q.length) {
            input.style.borderRadius = "24px 0px 0px 24px"
            button.style.borderRadius = "0px 24px 24px 0px"
        }
    }

    return (
        <>
            <div className={styles.search}>
                <form className={styles.form} onSubmit={submitSearch}>
                    <input id="search" name="search" placeholder="Search..." required={true} autoComplete={"off"}
                           value={userQ} onChange={onInputChange} onBlur={onInputFocusOut}/>
                    <button id="submit" type="submit"><Image className={styles.svg} src="/magnifying_glass.svg" alt="search" width={19}
                                                             height={19}/>
                    </button>
                </form>
                <div className={styles.suggest_container}>
                    {suggests.map((element, i) => {
                        return (<Suggester
                            data={{"element": element, "state": setUserQ, "input": input, "suggests": setSuggests}}
                            key={i}/>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Form

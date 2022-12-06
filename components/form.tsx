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

    const [suggests, setSuggests] = useState<any>([])

    let suggests_q: string[] = []

    const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUserQ(event.target.value)
            if (event.target.value.length > 0) {
                let headers = new Headers();
                headers.append("Content-Type", "application/json");
                let body= JSON.stringify({
                    "whole_search": event.target.value,
                    "last_word": event.target.value.split(" ,")[-1]
                });
                const options = {
                    method: 'POST',
                    headers: headers,
                    body: body,
                };
                const res = await fetch(`http://${process.env.SUGGESTER_HOST}:${process.env.SUGGESTER_PORT}/suggest`, options)
                const data = await res.json()
                const data_fixed = data.autocomplete.concat(data.next_words)
                setSuggests(data_fixed)
            } else {
                setSuggests([])
            }
            changeClass()
        }
        catch{
            console.log("Couldn't fetch suggests, loading static data")
            setUserQ(event.target.value)
            if (event.target.value.length > 0) {
                const data = {
                    autocomplete: ["iservery",
                        "welcome",
                        "ts vs js",
                        "nextjs docs",
                        "skolaonline",],
                    next_words: ["velky krtkus",
                        "why not to use any in ts",
                        "nfs neni need for speed",
                        "what is kvadrant",
                        "how to center a div",]
                }
                const data_fixed = data.autocomplete.concat(data.next_words)
                setSuggests(data_fixed)
            } else {
                setSuggests([])
            }
            changeClass()
        }

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
                    {suggests.map((element: any, i: React.Key | null | undefined) => {
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

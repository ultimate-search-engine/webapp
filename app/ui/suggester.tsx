import styles from "./styles/Suggester.module.scss"
import {useRouter} from "next/navigation";

interface SuggestType {
    element: string,
    state: React.Dispatch<React.SetStateAction<string | string[]>>,
    input: React.RefObject<HTMLInputElement>,
    suggests: React.Dispatch<React.SetStateAction<string[]>>
    search: string | string[]
}

// function Suggester(props: { data: SuggestType }) {
    function Suggester(props: any) {
    console.log(props.data)
    const router = useRouter()

    const pushSuggest = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        props.data.state(props.data.element)
        props.data.input.current?.focus()
        props.data.suggests([])
        await router.push(
                `/search?q=${props.data.element}&length=16&pagination=0`
        )
    }

    const renderSameParts = (searched: string | string[], text: string) => {
        let i = 0
        while (searched[i] === text[i]) {
            i++
        }
        return i ? (<><b>{searched.slice(0, i)}</b>{text.slice(i, text.length)}</>) : <>{text}</>
    }

    return (
        <p className={styles.link} onClick={pushSuggest}
           tabIndex={0}>{renderSameParts(props.data.search, props.data.element)}</p>
    )
}

export default Suggester

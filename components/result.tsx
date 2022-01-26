import Link from "next/link"

function Result(props: any) {
    return (
        <div>
            <Link href={props.data.link}>
                <a>{props.data.heading}</a>
            </Link>
        </div>
    )
}

export default Result

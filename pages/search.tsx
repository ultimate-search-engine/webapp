import styles from '../styles/Search.module.scss'
import Head from "next/head";
import {useRouter} from "next/router";
import Result from "../components/result";
import Form from "../components/form";
import React, {useState} from 'react';
import Hint from "../components/hint";
import Footer from "../components/footer"

function Search(data: any) {

    const router = useRouter()
    const query = router.query

    const results = data.data.fulltext.results

    // const [hints, chHints] = useState(data.data.hints.results)

    return (
        <div className={styles.container}>
            <Head>
                <title>ultimEngine - {query.q}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.form_container}>
                {/*<Form data={suggests}/>*/}
                <Form/>
            </div>
            <main className={styles.main}>
                <div className={styles.grid_container}>
                    <div className={styles.results} id={'results'}>
                        {results.map((element: any, i: number) => {
                            return (<Result data={element} key={i}/>)
                        })}
                    </div>
                    <div className={styles.hints}>
                        {/*{hints.map((element: any, i:number) => {return(<Hint data={element} key={i}/>)})}*/}
                    </div>
                </div>
            </main>
            <Footer data={query.pagination}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context: any) {

    // const res = await fetch(`http://192.168.1.242:8080${context.resolvedUrl}`)
    // const data = await res.json()

    const data = {
        fulltext: {
            results: [
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://stokys.github.io/PVY_Ukol_08_JS_Games/",
                    title: "The Ultimate Game Bundle - GitHub Pages",
                    description: "Hi, Have you ever wanted to kill some time? Or maybe just have some fun and play videogames? Well, you're in the right place!"
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                },
                {
                    url: "https://github.com",
                    title: "GitHub: Where the world builds software · GitHub",
                    description: "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects."
                }
            ]
        },
        hints: {
            results: [
                {
                    title: "343 Industries",
                    category: "Video game industry company",
                    web: "https://www.343industries.com/",
                    description: "343 Industries is an American video game developer located in Redmond, Washington, part of Xbox Game Studios. Headed by Bonnie Ross, the studio is responsible for the Halo series of military science fiction games, originally created and produced by Bungie, and is the developer of the Slipspace Engine.",
                    wiki: "https://en.wikipedia.org/wiki/343_Industries"
                },
                {
                    title: "343 Industries",
                    category: "Video game industry company",
                    web: "https://www.343industries.com/",
                    description: "343 Industries is an American video game developer located in Redmond, Washington, part of Xbox Game Studios. Headed by Bonnie Ross, the studio is responsible for the Halo series of military science fiction games, originally created and produced by Bungie, and is the developer of the Slipspace Engine.",
                    wiki: "https://en.wikipedia.org/wiki/343_Industries"
                }
            ]
        }
    }

    let tempResults = data.fulltext.results
    for (let i = 0; i < tempResults.length; i++){
        if (tempResults[i].title.length > 40){
            let temp = tempResults[i].title.substr(0, 40).split(' ')
            temp.splice(-1)
            tempResults[i].title = `${temp.join(' ')} ...`
        }
  }

    for (let i = 0; i < data.fulltext.results.length; i++) {
        let sliced = data.fulltext.results[i].url.split('/')
        let temp = `${sliced[0]}//${sliced[2]}`
        for (let j = 3; j < sliced.length; j++) {
            temp += ` > ${sliced[j]}`
        }
        Object.assign(data.fulltext.results[i], {url_cut: temp})
    }

    // for (let i = 0; i < data.hints.results.length; i++){
    //     let temp = data.hints.results[i].web.split('/')
    //     Object.assign(data.hints.results[i], {website_cut: temp[2]})
    //
    // }

    return {props: {data}}
}
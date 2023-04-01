import styles from "../styles/About.module.scss";
import Image from "next/image"
import {theme_changer} from "../scripts/theme_changer";
import Header from "../components/header";

function About() {

    if (typeof window !== 'undefined') {
        let temp = localStorage.getItem('theme')
        // @ts-ignore
        theme_changer(temp)
    }

    return (
        <div className={styles.container}>
            <Header title={'About'}/>
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.content_container}>
                        <h2>Themes</h2>
                        <div className={styles.theme_selector}>
                            <div className={`${styles.theme_div} ${styles.light}`} onClick={function () {
                                theme_changer("light")
                            }}>
                                <div className={`${styles.theme_header} ${styles.light}`}></div>
                                <div className={`${styles.theme_grid} ${styles.light}`}>
                                    <div className={`${styles.theme_results} ${styles.light}`}>
                                        <div className={`${styles.theme_result} ${styles.light}`}></div>
                                        <div className={`${styles.theme_result} ${styles.light}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.light}`}>
                                        <div className={`${styles.theme_special} ${styles.light}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.theme_div} ${styles.grey}`} onClick={function () {
                                theme_changer("grey")
                            }}>
                                <div className={`${styles.theme_header} ${styles.grey}`}></div>
                                <div className={`${styles.theme_grid} ${styles.grey}`}>
                                    <div className={`${styles.theme_results} ${styles.grey}`}>
                                        <div className={`${styles.theme_result} ${styles.grey}`}></div>
                                        <div className={`${styles.theme_result} ${styles.grey}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.grey}`}>
                                        <div className={`${styles.theme_special} ${styles.grey}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.theme_div} ${styles.dark}`} onClick={function () {
                                theme_changer("dark")
                            }}>
                                <div className={`${styles.theme_header} ${styles.dark}`}></div>
                                <div className={`${styles.theme_grid} ${styles.dark}`}>
                                    <div className={`${styles.theme_results} ${styles.dark}`}>
                                        <div className={`${styles.theme_result} ${styles.dark}`}></div>
                                        <div className={`${styles.theme_result} ${styles.dark}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.dark}`}>
                                        <div className={`${styles.theme_special} ${styles.dark}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.theme_div} ${styles.blue}`} onClick={function () {
                                theme_changer("blue")
                            }}>
                                <div className={`${styles.theme_header} ${styles.blue}`}></div>
                                <div className={`${styles.theme_grid} ${styles.blue}`}>
                                    <div className={`${styles.theme_results} ${styles.blue}`}>
                                        <div className={`${styles.theme_result} ${styles.blue}`}></div>
                                        <div className={`${styles.theme_result} ${styles.blue}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.blue}`}>
                                        <div className={`${styles.theme_special} ${styles.blue}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.theme_div} ${styles.green}`} onClick={function () {
                                theme_changer("green")
                            }}>
                                <div className={`${styles.theme_header} ${styles.green}`}></div>
                                <div className={`${styles.theme_grid} ${styles.green}`}>
                                    <div className={`${styles.theme_results} ${styles.green}`}>
                                        <div className={`${styles.theme_result} ${styles.green}`}></div>
                                        <div className={`${styles.theme_result} ${styles.green}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.green}`}>
                                        <div className={`${styles.theme_special} ${styles.green}`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.theme_div} ${styles.red}`} onClick={function () {
                                theme_changer("red")
                            }}>
                                <div className={`${styles.theme_header} ${styles.red}`}></div>
                                <div className={`${styles.theme_grid} ${styles.red}`}>
                                    <div className={`${styles.theme_results} ${styles.red}`}>
                                        <div className={`${styles.theme_result} ${styles.red}`}></div>
                                        <div className={`${styles.theme_result} ${styles.red}`}></div>
                                    </div>
                                    <div className={`${styles.theme_specials} ${styles.red}`}>
                                        <div className={`${styles.theme_special} ${styles.red}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className={styles.theme_controls}>
                            <div className={styles.button} onClick={()=>{addNewStyle("7")}}><p>7</p></div>
                        </div>*/}
                    </div>
                    <div className={styles.content_container}>
                        <h2>ultimEngine</h2>
                        <p className={styles.description}>The information on the website is growing rapidly on a daily
                            basis. According to the best estimates, there are
                            approximately 1 billion domains, serving nearly 18 trillion (1.8e16) pages.
                            Navigating such a vast cluster of information is far beyond any
                            of human understanding. In order for this data to be of use, there must be some sort of
                            system that can not only connect users with their areas of interest, but also sort
                            this content based on a number of importance measures such as source credibility, freshness,
                            quality and context. The current, most advanced, systems
                            use such values in the order of several hundred.</p>
                        <p className={styles.description}>We hereby present our solution to this problem based on a
                            software technique commonly known as a crawler. This has the task of periodically exploring
                            the web
                            The goal was to create a fully automatic and centralized search engine on a limited scale
                            that can handle common obstacles
                            and pitfalls of the web without any human intervention. The engine thus
                            can crawl the web itself, index this data and then present useful results to the average
                            user through a user-friendly web application, while constantly
                            improving its purpose.</p>
                        <p className={styles.description}>Search is an essential part of any large-scale website. It is
                            a very minimalistic part of their design, but under the hood it is often
                            the most complicated. Search can, from its most basic form, be constantly
                            can be continually enhanced with new features and optimizations. The complexity is thus
                            arbitrary. Just
                            few people think about what makes a good search engine really good. We
                            do. And it wasn't easy!</p>
                        <h2>Our Team</h2>
                        <div className={styles.image_section}>
                            <div className={styles.image_group}>
                                <Image className={styles.image_img} alt={"David Stoček"} src={"/stocekd.png"}
                                       layout={"responsive"} width={1} height={1}/>
                                <p><b>David Stoček</b><br/>Front-end developer<br/>[Web Application]</p>
                            </div>
                            <div className={styles.image_group}>
                                <Image className={styles.image_img} alt={"Filip Hostinský"} src={"/hostinskyf.png"}
                                       layout={"responsive"} width={1} height={1}/>
                                <p><b>Filip Hostinský</b><br/>Back-end developer<br/>[Search Manager]</p>
                            </div>
                            <div className={styles.image_group}>
                                <Image className={styles.image_img} alt={"Vojtěch Binar"} src={"/binarv.png"}
                                       layout={"responsive"} width={1} height={1}/>
                                <p><b>Vojtěch Binar</b><br/>Full-stack developer<br/>[Suggester]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About

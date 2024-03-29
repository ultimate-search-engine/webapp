"use client";
import styles from "./page.module.scss";
import Result from "../ui/result";
import { Suspense, useEffect, useState } from "react";
import Footer from "../ui/footer";
import { Special_goodreads, Special_wiki } from "../ui/special";
//import Calculator from "../components/calculator";
import Noresult from "../ui/noresults";
import { ResultType, SpecialType } from "../lib/interfaces";
import Header from "../ui/header";
import { useSearchParams, useRouter } from "next/navigation";

const Search = (props: any) => {
  const [results, setResults] = useState<any>();
  const [special, setSpecial] = useState<any>();

  useEffect(() => {
    getData({ resolvedUrl: "" }).then(async (res) => {
      if (results == null) setResults(res.props.tempResults);
      if (special == null) setSpecial(res.props.tempSpecial);
    });
  }, []);

  const query = useSearchParams();

  return (
    <>
      {results && special ? (
        <Suspense>
          <div>
            <div className={styles.container}>
              <Header
                title={String(query.get("q"))}
                searchField={true}
              />
              <main className={styles.main}>
                <div className={styles.grid_container}>
                  <div
                    className={styles.results}
                    id={"results"}
                  >
                    {results && results.length ? (
                      results.map((element: ResultType, i: number) => {
                        return (
                          <Result
                            data={element}
                            key={i}
                          />
                        );
                      })
                    ) : (
                      <Noresult />
                    )}
                  </div>
                  {special ? (
                    <div className={styles.special}>
                      {/*<Calculator/>*/}
                      {special.wiki.length ? (
                        special.wiki.map((element: SpecialType, i: number) => {
                          return (
                            <Special_wiki
                              data={element}
                              key={i}
                            />
                          );
                        })
                      ) : (
                        <p></p>
                      )}
                      {special.goodreads.length ? (
                        special.goodreads.map(
                          (element: SpecialType, i: number) => {
                            return (
                              <Special_goodreads
                                data={element}
                                key={i}
                              />
                            );
                          }
                        )
                      ) : (
                        <p></p>
                      )}
                    </div>
                  ) : null}
                </div>
              </main>
              <Footer
                data={
                  typeof query.get("pagination") == "string"
                    ? parseInt(String(query.get("pagination")))
                    : 1
                }
                results={results.length}
              />
            </div>
          </div>
        </Suspense>
      ) : null}
    </>
  );
};

export default Search;

async function getData(context: any) {
  try {
    const response = await fetch(
      `http://${process.env.NEXT_PUBLIC_SM_HOST}:${process.env.NEXT_PUBLIC_SM_PORT}${context.resolvedUrl}`
    );
    const data = await response.json();
    console.log(data);
    return format_data(data);
  } catch (err) {
    console.log("Couldn't fetch results, loading static data");
    console.log(err);
    const data = {
      fulltext: {
        results: [
          {
            type: "goodreads",
            genres: [
              "Sequential Art",
              "Graphic Novels",
              "Fantasy",
              "Young Adult",
              "Paranormal",
              "Witches",
              "Mystery",
              "Fantasy",
              "Magic",
              "Fantasy",
              "Paranormal",
              "Sequential Art",
              "Comics",
              "Horror",
              "LGBT",
            ],
            rating: "4.01",
            description:
              "Fans of Chilling Adventures of Sabrina will love diving into the mysterious and witchy world of award-nominated creator Sweeney Boo. Enchanting full-color illustrations will be sure to charm readers as they explore the halls of Younwity's Institute of Magic and the forbidden forest that lies beyond. In the days leading up to Samhain, the veil between the world of the dead a Fans of Chilling Adventures of Sabrina will love diving into the mysterious and witchy world of award-nominated creator Sweeney Boo. Enchanting full-color illustrations will be sure to charm readers as they explore the halls of Younwity's Institute of Magic and the forbidden forest that lies beyond. In the days leading up to Samhain, the veil between the world of the dead and the living is at its thinnest. One day, everything was exactly as it was supposed to be. And the next, the closest thing Abby ever had to a sister, Noreen, was just... gone. Distracted by the annual preparations for the Samhain festival, Abby's classmates are quick to put Noreen's disappearance aside. The Coven will find her, Abby's friends say. They have it under control. But Abby can't let it go. Soon a search for answers leads her down a rabbit hole that uncovers more secrets than Abby can handle. As mounting evidence steers her toward the off-limits woods that surround the academy, she begins to see that Noreen's disappearance mysteriously has a lot in common with another girl who went missing all those years ago... ...more",
            title: "Over My Dead Body",
            url: "https://www.goodreads.com/book/show/59787427-over-my-dead-body",
          },
          {
            type: "default",
            description:
              "Marshall Field,  (born Aug. 18, 1834, near Conway, Mass., U.S.—died  Jan. 16, 1906, New York City), American department-store owner whose pioneering activities in retail merchandising were continued and extended into publishing by successive generations of his family. Born on a farm, Field became at 16 an errand boy in a dry-goods store in Pittsfield, Mass., where he developed rapidly into an adept salesman. After going to Chicago, he was hired in 1856 by the mercantile house of Cooley, Wadsworth and Company (afterward Farwell, Field and Company), in which he attained full partnership. In 1865 he and Levi Zeigler Leiter (1834–1904),",
            title: "Marshall Field | American businessman | Britannica",
            url: "https://www.britannica.com/biography/Marshall-Field",
          },
          {
            type: "goodreads",
            genres: [
              "Sequential Art",
              "Graphic Novels",
              "Fantasy",
              "Young Adult",
              "Paranormal",
              "Witches",
              "Mystery",
              "Fantasy",
              "Magic",
              "Fantasy",
              "Paranormal",
              "Sequential Art",
              "Comics",
              "Horror",
              "LGBT",
            ],
            rating: "4.01",
            description:
              "Fans of Chilling Adventures of Sabrina will love diving into the mysterious and witchy world of award-nominated creator Sweeney Boo. Enchanting full-color illustrations will be sure to charm readers as they explore the halls of Younwity's Institute of Magic and the forbidden forest that lies beyond. In the days leading up to Samhain, the veil between the world of the dead a Fans of Chilling Adventures of Sabrina will love diving into the mysterious and witchy world of award-nominated creator Sweeney Boo. Enchanting full-color illustrations will be sure to charm readers as they explore the halls of Younwity's Institute of Magic and the forbidden forest that lies beyond. In the days leading up to Samhain, the veil between the world of the dead and the living is at its thinnest. One day, everything was exactly as it was supposed to be. And the next, the closest thing Abby ever had to a sister, Noreen, was just... gone. Distracted by the annual preparations for the Samhain festival, Abby's classmates are quick to put Noreen's disappearance aside. The Coven will find her, Abby's friends say. They have it under control. But Abby can't let it go. Soon a search for answers leads her down a rabbit hole that uncovers more secrets than Abby can handle. As mounting evidence steers her toward the off-limits woods that surround the academy, she begins to see that Noreen's disappearance mysteriously has a lot in common with another girl who went missing all those years ago... ...more",
            title: "Over My Dead Body",
            url: "https://www.goodreads.com/book/show/59787427-over-my-dead-body",
          },
          {
            type: "default",
            description: "Marshall Field: Additional Information",
            title: "Marshall Field | Britannica",
            url: "https://www.britannica.com/biography/Marshall-Field/additional-info",
          },
          {
            type: "wikipedia",
            subsections: [
              "Contents",
              "Life and career",
              "Scientific career",
              "Non-scientific legacy",
              "In popular culture",
              "Awards and honors",
              "Publications",
              "See also",
              "Notes",
              "References",
              "Further reading",
              "External links",
              "Navigation menu",
            ],
            description:
              'Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[6] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (listen); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist,[7] widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.[3][8] His mass–energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed "the world\'s most famous equation".[9] His work is also known for its influence on the philosophy of science.[10][11] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[12] a pivotal step in the development of quantum theory. His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius".[13]',
            title: "Albert Einstein",
            url: "https://en.wikipedia.org/wiki/Albert_Einstein",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://stokys.github.io/PVY_Ukol_08_JS_Games/",
            title: "The Ultimate Game Bundle - GitHub Pages",
            description:
              "Hi, Have you ever wanted to kill some time? Or maybe just have some fun and play videogames? Well, you're in the right place!",
          },
          {
            type: "default",
            url: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
            title:
              "Next.js in 100 Seconds // Plus Full Beginner's Tutorial - YouTube",
            description:
              "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
          },
          {
            type: "default",
            url: "https://www.seznam.cz/",
            title: "Seznam – najdu tam, co neznám",
            description:
              "Nejnavštěvovanější český internetový portál nabízející vyhledávač, e-mail, aktuální zprávy, předpověď počasí a odkazy, které se mohou hodit.",
          },
          {
            type: "default",
            url: "https://stackoverflow.com/questions/19544452/remove-last-item-from-array",
            title: "javascript - Remove last item from array - Stack Overflow",
            description:
              "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.",
          },
          {
            type: "wikipedia",
            subsections: [
              "Contents",
              "Life and career",
              "Scientific career",
              "Non-scientific legacy",
              "In popular culture",
              "Awards and honors",
              "Publications",
              "See also",
              "Notes",
              "References",
              "Further reading",
              "External links",
              "Navigation menu",
            ],
            description:
              'Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[6] German: [ˈalbɛʁt ˈʔaɪnʃtaɪn] (listen); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist,[7] widely acknowledged to be one of the greatest and most influential physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.[3][8] His mass–energy equivalence formula E = mc2, which arises from relativity theory, has been dubbed "the world\'s most famous equation".[9] His work is also known for its influence on the philosophy of science.[10][11] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[12] a pivotal step in the development of quantum theory. His intellectual achievements and originality resulted in "Einstein" becoming synonymous with "genius".[13]',
            title: "Albert Einstein",
            url: "https://en.wikipedia.org/wiki/Albert_Einstein",
          },
          {
            type: "default",
            url: "https://www.sspu-opava.cz/cs/",
            title: "SŠPU Opava - úvodní stránka",
            description:
              "Domovská stránka Střední školy průmyslové a umělecké v Opavě, přehled oborů, rozcestník, aktuální informace",
          },
          {
            type: "default",
            url: "https://music.youtube.com/",
            title: "YouTube Music",
            description:
              "A new music service with official albums, singles, videos, remixes, live performances and more for Android, iOS and desktop. It's all here.",
          },
          {
            type: "default",
            url: "https://polyhaven.com/a/rock_wall",
            title: "Rock Wall Texture • Poly Haven",
            description: "Download this free Texture from Poly Haven",
          },
          {
            type: "default",
            url: "https://www.geoguessr.com/play-with-friends",
            title: "Play with friends - GeoGuessr",
            description:
              "GeoGuessr is a geography game which takes you on a journey around the world and challenges your ability to recognize your surroundings.",
          },
          {
            type: "default",
            url: "https://tetr.io/",
            title: "TETR.IO",
            description:
              "Puzzle together in this modern yet familiar online stacker. Play against friends and foes all over the world, or claim a spot on the leaderboards - the stacker future is yours!",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
          {
            type: "default",
            url: "https://github.com",
            title: "GitHub: Where the world builds software · GitHub",
            description:
              "GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.",
          },
        ],
      },
    };
    return format_data(data);
  }

  function limitDesc(desc: string, limit: number) {
    let temp = desc.slice(0, limit);
    return `${temp.substring(0, temp.lastIndexOf(" "))} ...`;
  }

  // Extrémně dlouhé pokud bych neměl psát any
  function format_data(data: any) {
    let tempResults = [];
    let tempSpecial = {
      wiki: [],
      goodreads: [],
    };

    for (let i = 0; i < data.fulltext.results.length; i++) {
      if (data.fulltext.results[i].type == "default") {
        tempResults.push(data.fulltext.results[i]);
        if (tempResults[tempResults.length - 1].title.length > 60) {
          let temp = tempResults[tempResults.length - 1].title
            .substring(0, 60)
            .split(" ");
          temp.splice(-1);
          tempResults[tempResults.length - 1].title = `${temp.join(" ")} ...`;
        }
      } else if (data.fulltext.results[i].type == "wikipedia") {
        if (!tempSpecial.wiki.length) {
          // @ts-ignore
          tempSpecial.wiki.push(data.fulltext.results[i]);
        } else {
          if (data.fulltext.results[i].description) {
            if (data.fulltext.results[i].description.length > 360) {
              data.fulltext.results[i].description = limitDesc(
                data.fulltext.results[i].description,
                360
              );
            }
          }
          tempResults.push(data.fulltext.results[i]);
        }
      } else if (data.fulltext.results[i].type == "goodreads") {
        if (
          !tempSpecial.goodreads.length &&
          data.fulltext.results[i].url.split("/")[3] === "book"
        ) {
          // @ts-ignore
          tempSpecial.goodreads.push(data.fulltext.results[i]);
        } else {
          if (data.fulltext.results[i].description) {
            if (data.fulltext.results[i].description.length > 360) {
              data.fulltext.results[i].description = limitDesc(
                data.fulltext.results[i].description,
                360
              );
            }
          }
          tempResults.push(data.fulltext.results[i]);
        }
      }
    }

    for (let i = 0; i < tempResults.length; i++) {
      let sliced = tempResults[i].url.split("/");
      let temp = `${sliced[0]}//${sliced[2]}`;
      if (sliced[sliced.length - 1] == "") {
        sliced.pop();
      }
      for (let j = 3; j < sliced.length; j++) {
        temp += ` > ${sliced[j]}`;
      }
      Object.assign(tempResults[i], { url_cut: temp });
    }

    return { props: { tempResults, tempSpecial } };
  }
}

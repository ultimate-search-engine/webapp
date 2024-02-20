"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Form from "./ui/form";
import Header from "./ui/header";
import { Suspense } from "react";

const Home = () => {


  return (
    <Suspense>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.main_div}>
            <span className={styles.logo}>
              <Image
                className={styles.svg}
                src="/logo.svg"
                alt="Out logo"
                width={144}
                height={32}
              />
            </span>
            <Form />
          </div>
        </main>
      </div>
    </Suspense>
  );
};

export default Home;

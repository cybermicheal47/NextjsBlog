import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blogg = async () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="/blogg/testId" className={styles.container}>
        <div className={styles.imgcontainer}>
          <Image
            src="/a.jpg"
            width={400}
            height={250}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Loperum </h1>
          <p className={styles.desc}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolorem laboriosam rerum? Sapiente quaerat enim obcaecati ipsam
            deleniti, aperiam sit, fugiat laboriosam dolor asperiores
            repudiandae rerum earum iste, ut fuga.
          </p>
        </div>
      </Link>

      <Link href="/blogg/testId" className={styles.container}>
        <div className={styles.imgcontainer}>
          <Image
            src="/c.jpg"
            width={400}
            height={250}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Loperum </h1>
          <p className={styles.desc}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolorem laboriosam rerum? Sapiente quaerat enim obcaecati ipsam
            deleniti, aperiam sit, fugiat laboriosam dolor asperiores
            repudiandae rerum earum iste, ut fuga.
          </p>
        </div>
      </Link>

      <Link href="/blogg/testId" className={styles.container}>
        <div className={styles.imgcontainer}>
          <Image
            src="/b.jpg"
            width={400}
            height={250}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Loperum </h1>
          <p className={styles.desc}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolorem laboriosam rerum? Sapiente quaerat enim obcaecati ipsam
            deleniti, aperiam sit, fugiat laboriosam dolor asperiores
            repudiandae rerum earum iste, ut fuga.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blogg;

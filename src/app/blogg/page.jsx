import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blogg = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
      {data.map((item) => (
        <Link href={item._id} className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title} </h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogg;

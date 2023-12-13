import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(slug) {
  const dataurl = `https://jsonplaceholder.typicode.com/posts/${slug}`;
  const res = await fetch(dataurl, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  console.log("url:", dataurl);
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.slug);
  console.log("params:", params.slug);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

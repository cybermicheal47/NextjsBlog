import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (files) => {
  const data = items[files];
  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.cattitle}> {params.category}</h1>

      {/* section 1  */}
      {data.map((item) => (
        <div className={styles.content} key={item.id}>
          <div className={styles.contenttext}>
            <h1 className={styles.titled}> {item.tilte} </h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} fill={true} alt="" src={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

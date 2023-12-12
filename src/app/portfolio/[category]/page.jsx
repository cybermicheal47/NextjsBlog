import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.cattitle}> {params.category}</h1>

      {/* section 1  */}
      <div className={styles.content}>
        <div className={styles.contenttext}>
          <h1 className={styles.titled}>Test Of Time </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            quaerat animi facere repellendus esse quisquam, facilis, cumque
            temporibus vero est tempore accusamus iusto pariatur, inventore
            minima modi quas qui sequi!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} fill={true} alt="" src="/a.jpg" />
        </div>
      </div>

      {/* section 2 */}

      <div className={styles.content}>
        <div className={styles.contenttext}>
          <h1 className={styles.titled}> Long Distance </h1>
          <p className={styles.desc}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            quaerat animi facere repellendus esse quisquam, facilis, cumque
            temporibus vero est tempore accusamus iusto pariatur, inventore
            minima modi quas qui sequi!{" "}
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} fill={true} alt="" src="/a.jpg" />
        </div>
      </div>

      {/* section 3 */}

      <div className={styles.content}>
        <div className={styles.contenttext}>
          <h1 className={styles.titled}> Withstand The Test Of Time </h1>
          <p className={styles.desc}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            quaerat animi facere repellendus esse quisquam, facilis, cumque
            temporibus vero est tempore accusamus iusto pariatur, inventore
            minima modi quas qui sequi!
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} fill={true} alt="" src="/a.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Category;

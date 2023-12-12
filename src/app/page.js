import Image from "next/image";
import styles from "./page.module.css";
import Stand from "public/stand.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Enhance your digital product with innovative and captivating designs!
        </h1>
        <p className={styles.desc}>
          {" "}
          We can make you ideas come to live. We are a group of developers who
          specialize in various areas{" "}
        </p>
        <Button url="/portfolio" text="Our Projects" />
      </div>
      <div className={styles.item}>
        <Image src={Stand} alt="" className={styles.img} />
      </div>
    </div>
  );
}

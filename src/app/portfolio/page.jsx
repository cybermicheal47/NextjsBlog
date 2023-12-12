import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}> Choose from Our Gallery </h1>
      <div className={styles.content}>
        <Link href="/portfolio/software" className={styles.contentdetail}>
          <span className={styles.title}>Software</span>
        </Link>

        <Link href="/portfolio/applications" className={styles.contentdetail}>
          <span className={styles.title}>Applications</span>
        </Link>

        <Link href="/portfolio/website" className={styles.contentdetail}>
          <span className={styles.title}>Websites</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;

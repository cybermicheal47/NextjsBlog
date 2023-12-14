import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@ all rights reserved</div>
      <div className={styles.socialicon}>
        <Image src="/2.png" width={15} height={15} alt="WEB DeV" />
        <Image src="/4.png" width={15} height={15} alt="WEB DeV" />
        <Image src="/3.png" width={15} height={15} alt="WEB DeV" />
        <Image src="/1.png" width={15} height={15} alt="WEB DeV" />
      </div>
    </div>
  );
};

export default Footer;

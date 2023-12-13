import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Contactus from "public/contact-us.png";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Contact Us",
  description: " this is our contact information, we are available 247",
};

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact Us</div>
      <div className={styles.contactcontainer}>
        <div className={styles.imgcontainer}>
          <Image
            src="/contact-us.png"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>

        <form className={styles.formcontact}>
          <input type="text" placeholder=" Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            col="30"
            rows="10"
            className={styles.textarea}
            placeholder="Message"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

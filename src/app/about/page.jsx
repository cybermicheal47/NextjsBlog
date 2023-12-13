import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Aboutimg from "public/about.jpg";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description: "  About Page",
};

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src={Aboutimg} className={styles.img} />
        <div className={styles.imgtext}>
          <h1 className={styles.imgtitle}> Loperum ipsum esach </h1>
          <h2 className={styles.imgdesc}>Loperum ipusm sit amint wegoh</h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>What defines us? </h1>
          <p className={styles.desc}>
            {" "}
            Cupiditate nisi, voluptatum tempora veritatis doloribus fuga
            officiis alias porro commodi quas ex eos necessitatibus tempore ea
            consequuntur quisquam laborum! Rerum possimus nam eius hic
            exercitationem consequuntur nostrum, magnam labore! Debitis
            laboriosam odio expedita officia reprehenderit exercitationem, aut
            repudiandae <br /> <br /> placeat quidem rem, sapiente quae magnam
            repellendus, commodi voluptas. Enim delectus nam nemo vel dolorem
            magnam dolor accusamus esse saepe dolorum? Obcaecati nisi magni,
            ipsam necessitatibus deserunt odit tenetur dicta.
          </p>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> What Makes Us Different?</h1>
          <p className={styles.desc}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias animi aut, quae porro quia neque temporibus! Eum provident
            dolores minus sunt, unde maiores accusantium quidem veniam
            repudiandae <br /> <br /> deserunt quisquam. ipsa aperiam, odit
            cupiditate incidunt reprehenderit quia, laborum saepe, quod aliquid
            quo optio corrupti illum? Atque, consequatur. Ex.{" "}
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default About;

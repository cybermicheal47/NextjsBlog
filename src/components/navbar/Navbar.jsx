import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Darkmode from "../Darkmode/Darkmode";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "Blog",
    url: "/blogg",
  },

  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 5,
    title: "About",
    url: "/about",
  },

  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        WEB DEV
      </Link>

      <div className={styles.links}>
        <Darkmode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

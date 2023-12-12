"use client";

import React, { useContext } from "react";
import styles from "./Darkmode.module.css";
import { Darkmodecontext } from "../../../context/Darkmodecontext";

const Darkmode = () => {
  const { toogle, mode } = useContext(Darkmodecontext);
  return (
    <div className={styles.container} onClick={toogle}>
      <div className={styles.icon}> 🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
      {/* //the 2px is because we have a padding of 2px */}
    </div>
  );
};

export default Darkmode;

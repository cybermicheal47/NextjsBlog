"use client";

import { createContext, useState } from "react";
export const Darkmodecontext = createContext();
export const DarkmodeProvider = ({ children }) => {
  const [mode, setmode] = useState("dark");
  const toogle = () => {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Darkmodecontext.Provider value={{ toogle, mode }}>
      <div className={`theme ${mode}`}> {children} </div>
    </Darkmodecontext.Provider>
  );
};

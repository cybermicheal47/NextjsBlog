"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setdata] = useState([]);
  // const [err, seterr] = useState(false);
  // const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setloading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       seterr(true);
  //     }
  //     const data = await res.json();
  //     setdata(data);
  //     setloading(false);
  //   };
  //   getData();
  // }, []);
  // console.log(data);

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;

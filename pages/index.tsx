import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home({}) {
  const router = useRouter();
  useEffect(() => {
    const href = "/exoplanets-ssr/11-com-b";

    router.push(href);
  }, []);

  return (
    <div className={styles.container}>
      <div></div>
    </div>
  );
}

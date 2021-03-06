import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      router.push("/Home");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.img
        animate={{ rotate: 360 }}
        transition={{ duration: 1.3, repeat: Infinity }}
        className={styles.loadingPage__icon}
        src="/Eclipse-1.1s-200px (1).png"
        alt=""
      />
    </div>
  );
}

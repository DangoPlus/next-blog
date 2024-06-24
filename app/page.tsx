"use client";
import { Link } from "@chakra-ui/next-js";
import { Divider } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>

        <Divider />
        <Link
          href="/admin/dashboard"
          color="blue.400"
          _hover={{ color: "blue.500" }}
        >
          dashboard
        </Link>
      </div>
    </main>
  );
}

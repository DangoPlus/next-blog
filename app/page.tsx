'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
    <Link href='/admin/dashboard' color='blue.400' _hover={{ color: 'blue.500' }}>
      dashboard
    </Link>
      </div>
    </main>
  );
}

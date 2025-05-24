'use client';

import Image from "next/image";
import styles from "../style.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const iconClass = (base: string) =>
    `${base} ${!isDarkMode ? 'colored' : ''}`;

  return (
    <header className={styles.header}>
      <Image
        alt="Profilowe"
        src="/ProfilePicture.jpg"
        className={styles.image}
        width={250}
        height={250}
      />
      <div>
        <h1>Sebastian Sumiński</h1>
        <h3>React Native Developer</h3>
        <div className={styles.links}>
          <Link href="https://github.com/ssuminski3" target="_blank" rel="noopener noreferrer">
            <i className={`${iconClass("devicon-github-original")} ${styles.icon}`}></i>
          </Link>
          <Link href="https://www.linkedin.com/in/sebastian-sumi%C5%84ski-0aab58291/" target="_blank" rel="noopener noreferrer">
            <i className={iconClass("devicon-linkedin-plain")}></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import styles from "../style.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}></div>
      <div>
        <h1>WITAm</h1>
        <h3>React Native Developer</h3>
        <div className={styles.header}>
          <h5>Github</h5>
          <h5>Linkedin</h5>
        </div>
      </div>
    </header>
  );
}

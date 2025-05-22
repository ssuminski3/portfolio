// components/TechStack.tsx

import type { Tech } from '../utils/type';
import styles from '../style.module.css';

type TechStackProps = {
  tech: Tech[];
};

export default function TechStack({ tech }: TechStackProps) {
  return (
    <div className={styles.techstack}>
      {tech.map((item) => (
        <div key={item.name} className={styles.techitem}>
          <i className={`${item.class} ${styles.techicon}`} />
          <span className={styles.techname}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

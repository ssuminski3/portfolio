'use client';

import { useState } from 'react';
import styles from '../style.module.css';
import { Tech } from '../utils/type';

type Props = {
  techList: Tech[];
  onSelect: (tech: Tech | null) => void;
};

export default function TechDropdown({ techList, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Tech | null>(null);

  const handleSelect = (tech: Tech | null) => {
    setSelected(tech);
    onSelect(tech);
    setOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownHeader} onClick={() => setOpen(!open)}>
        {selected ? (
          <>
            <i className={`${selected.class} ${styles.icon}`} />
            {selected.name}
          </>
        ) : (
          'All Technologies'
        )}
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </div>

      {open && (
        <div className={styles.dropdownList}>
          <div className={styles.dropdownItem} onClick={() => handleSelect(null)}>
            All Technologies
          </div>
          {techList.map((tech) => (
            <div
              key={tech.name}
              className={styles.dropdownItem}
              onClick={() => handleSelect(tech)}
            >
              <i className={`${tech.class} ${styles.icon}`} />
              {tech.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

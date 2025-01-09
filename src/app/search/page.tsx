import { ReactElement } from "react";

import styles from "./page.module.css";
import CardComponent from "@/components/card/card.component";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.fillters}>
        <CardComponent>
          <div className={styles.title}>فرد یا زوج</div>
          <button>زوج</button>
          <button>فرد</button>
        </CardComponent>
      </div>
      <ul className={styles.result}>
        {items.map((item) => (
          <li key={item} className={item % 2 === 0 ? styles.active : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

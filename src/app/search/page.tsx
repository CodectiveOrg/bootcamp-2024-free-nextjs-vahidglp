import { ReactElement } from "react";

import styles from "./page.module.css";
import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";
import FilterComponent from "./components/filter.componet";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <FilterComponent
          title="فرد یا زوج"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        ></FilterComponent>
      </div>
      <ul className={styles.result}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

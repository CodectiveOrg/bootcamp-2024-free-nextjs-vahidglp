'use client';

import { ReactElement } from "react";

import styles from "./page.module.css";
import FilterComponent from "./components/filter.componet";
import FiltersProvider from "./provider/filters.provider";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <FiltersProvider>
      <div className={styles.page}>
        <div className={styles.filters}>
          <FilterComponent
            title="فرد یا زوج"
            options={[
              { key: "even", label: "زوج" },
              { key: "odd", label: "فرد" },
            ]}
          ></FilterComponent>
          <FilterComponent
            title="بخش پذیری"
            options={[
              { key: "three", label: "بخشپذیر بر 3" },
              { key: "five", label: "بخشپذیر بر 5" },
              { key: "seven", label: "بخشپذیر بر 7" },
            ]}
          ></FilterComponent>
        </div>
        <ul className={styles.result}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </FiltersProvider>
  );
}

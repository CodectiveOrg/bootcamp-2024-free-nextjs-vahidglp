import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./filter.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({
  title,
  options,
}: Props): ReactElement {
  return (
    <CardComponent>
      <div className={styles.filters}>
        <div className={styles.title}>فرد یا زوج</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent key={option.value}>
              {option.label}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}

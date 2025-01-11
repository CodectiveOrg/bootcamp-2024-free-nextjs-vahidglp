"use client";

import { ReactElement, useContext } from "react";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import styles from "./filter.module.css";
import { FiltersContext } from "../provider/filters.provider";
import clsx from "clsx";
import { FiltersType } from "../types/filters.type";

type Option = {
  key: keyof FiltersType;
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
  const { filters, changeFilters } = useContext(FiltersContext);

  return (
    <CardComponent>
      <div className={styles.filters}>
        <div className={styles.title}>فرد یا زوج</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent
              key={option.key}
              isActive = {filters[option.key]}
              onClick={() => changeFilters(option.key, !filters[option.key])}
            >
              {option.label}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}

"use clinet";

import {
  ReactElement,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

import { FiltersType } from "../types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilters: <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ) => void;
  removeFilters: <Tkey extends keyof FiltersType>(key: Tkey) => void;
  clearAll: () => void;
};

type Props = PropsWithChildren;

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilters: () => {},
  removeFilters: () => {},
  clearAll: () => {},
});

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilters = <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };

  const removeFilters = <TKey extends keyof FiltersType>(key: TKey): void => {
    setFilters((old) => {
      const clone = { ...old };
      delete clone[key];
      return clone;
    });
  };

  const clearAll = (): void => {
    setFilters({});
  };

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilters, removeFilters, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

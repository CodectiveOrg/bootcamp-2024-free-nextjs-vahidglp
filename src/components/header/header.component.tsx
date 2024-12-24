"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathName = usePathname();

  type linkType = {
    id: number;
    ref: string;
    title: string;
  };

  const linkOfHeader: linkType[] = [
    { id: 1, ref: "/", title: "خانه" },
    { id: 2, ref: "/search", title: "جستجو" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {linkOfHeader.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.ref}
                  className={clsx(pathName === item.ref && styles.active)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
}

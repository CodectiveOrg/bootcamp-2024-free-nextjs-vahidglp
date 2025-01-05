import { ReactElement } from "react";
import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.svg";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>404</div>
        <h1>صفحه مورد نظر یافت نشد</h1>
        <p>
          با عرض پوزش، صفحه‌ای که به دنبال آن هستید وجود ندارد. لطفاً از جستجو
          برای یافتن صفحه مورد نظر استفاده کنید.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}

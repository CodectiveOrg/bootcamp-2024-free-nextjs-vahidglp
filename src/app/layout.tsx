import type { Metadata } from "next";
import { ReactElement } from "react";

import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";
import { NextFont } from "next/dist/compiled/@next/font";

import "@/styles/typography.css"
import "./globals.css";

const vazirmatn: NextFont = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع دکتر من",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Theme } from "./lib/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultimate Search Engine",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <html lang="cs">
        <body className={inter.className}>{children}</body>
      </html>
    </Theme>
  );
};

export default RootLayout;

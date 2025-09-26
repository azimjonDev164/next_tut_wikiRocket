import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Information about company",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}

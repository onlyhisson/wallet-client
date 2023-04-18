import { ReactNode } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

import styles from "@/styles/Home.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutPublic({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

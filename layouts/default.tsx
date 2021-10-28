import Image from "next/image";
import React from "react";
import logo from "./../images/PotatoLogo.png";

import styles from "./default.module.scss";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.LogoContainer}>
          <Image
            alt="logo"
            className={styles.LogoHeight}
            src={logo}
            width={80}
            height={80}
          />
          <span className={styles.LogoTitle}>We are Potato!</span>
        </div>
      </header>
      <main>{props.children}</main>
      <footer>This is footer</footer>
    </>
  );
};

export default DefaultLayout;

import Image from "next/image";
import React from "react";
import styles from "./Button.module.css";
import logo from "./../images/DurianLogo.png";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <header>
        <Image
          alt="logo"
          src={logo}
					width={100}
					height={100}
        />
        This is header
      </header>
      <main>{props.children}</main>
      <footer>This is footer</footer>
    </>
  );
};

export default DefaultLayout;

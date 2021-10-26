import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  ...props
}: LayoutProps) => {
  return (
    <>
      <header>This is header</header>
      <main>{props.children}</main>
      <footer>This is footer</footer>
    </>
  );
};

export default Layout;

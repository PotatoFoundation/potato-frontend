import React from "react";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <header>This is header</header>
      <main>{props.children}</main>
      <footer>This is footer</footer>
    </>
  );
};

export default DefaultLayout;

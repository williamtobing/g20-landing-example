import Meta from "./Meta";
import Nav from "./Nav";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;

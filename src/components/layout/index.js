import React from "react";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-32">{children}</div>
    </>
  );
};

export default Layout;

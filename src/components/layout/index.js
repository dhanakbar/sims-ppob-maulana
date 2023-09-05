import React from "react";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-32 py-4">{children}</div>
    </>
  );
};

export default Layout;

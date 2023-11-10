import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Header />
      <main style={{ minHeight: "40vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

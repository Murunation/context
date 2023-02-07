import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
  return <div style={{minHeight: "100vh", position: "relative"}}>
    <Header/>
    {children}
    <Footer/>
  </div>;
}

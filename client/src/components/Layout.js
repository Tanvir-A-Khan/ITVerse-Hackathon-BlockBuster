import React from "react";
import { Toaster } from "react-hot-toast";
import { useEtherContext } from "../contexts/etherContext";
import Footer from "./Footer";
import Navbar from "./Nav/Navbar";

export const Layout = ({ children }) => {
  const { instance } = useEtherContext();
  const { account } = instance;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>{account !== null && <div>{children}</div>}</main>
      <Footer />
    </>
  );
};

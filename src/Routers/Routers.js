import React, { createContext, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
export const AddressContext = createContext("Portfolio");
const Routers = () => {
  const [address, setAddress] = useState("Portfolio");
  useEffect(() => {
    document.title = address;
  }, [address]);
  return (
    <>
      <AddressContext.Provider value={setAddress}>
        <Router basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="space-at-the-bottom"></footer>
        </Router>
      </AddressContext.Provider>
    </>
  );
};

export default Routers;

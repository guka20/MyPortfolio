import React from "react";
import { useContext, useEffect } from "react";
import { AddressContext } from "../Routers/Routers";
const Main = () => {
  const setAddress = useContext(AddressContext);
  useEffect(() => {
    alert("hello world");
    setAddress("Portfolio");
  }, [setAddress]);
  return (
    <section className="home-section">
      <header>
        <h1>Welcome to my Portfolio</h1>
      </header>
      <main>
        <div className="img"></div>
      </main>
      <footer>
        <div>I Am Gurami Davitazde</div>
        <span className="frnt-dev">Front-End Developer</span>
        <span>
          Inspection My Portfolio and enjoy with it. <br />I hope you will like{" "}
          {"\uD83D\uDE00"}
        </span>
      </footer>
    </section>
  );
};

export default Main;

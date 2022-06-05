import React from "react";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AddressContext } from "../Routers/Routers";
import image from "../image/webpic.png";
import List from "../List.json";
const Projects = () => {
  const demoLink = "https://github.com/guka20/";
  const setAddress = useContext(AddressContext);
  useEffect(() => {
    setAddress("Projects");
  }, [setAddress]);
  return (
    <section className="projects">
      {List.map((l) => {
        return (
          <motion.div
            key={l.id}
            className="container"
            initial={{ marginTop: -20  }}
            animate={{ marginTop: 0 }}
            transition={{
              duration: 1,
              delay: 0.2 * (List.length - (l.id + 1)),
            }}
          >
            <header>
              <span>{l.name}</span>
            </header>
            <main>
              <img src={image} alt="image" className="image" aria-hidden />
            </main>
            <div className="information">
              {l.description}
              <div>
                <b>Used: </b>
                {l.used.map((k, index) => {
                  return (
                    <span key={index}>
                      <b> #{k} </b>
                    </span>
                  );
                })}
              </div>
            </div>
            <footer>
              <a href={demoLink + l.gitName} target="_blank" rel="noreferrer">
                <button>Github Demo</button>
              </a>
              <a
                href={"https://guka20.github.io/" + l.gitName}
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </footer>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Projects;

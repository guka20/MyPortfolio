import React from "react";
import { motion } from "framer-motion";
import { useContext,useEffect } from "react";
import { AddressContext } from "../Routers/Routers";
const skillsList = [
  {
    name: "HTML",
    percent: 75,
  },
  {
    name: "CSS/SASS",
    percent: 65,
  },
  {
    name: "JavaScript",
    percent: 60,
  },
  {
    name: "ReactJS",
    percent: 70,
  },
  {
    name: "Git",
    percent: 50,
  },
];

const About = () => {
  const setAddress = useContext(AddressContext);
  useEffect(() => {
    setAddress("About");
  }, [setAddress]);
  const progresiveDiv={
    width: "90%",
    maxWidth: "900px",
    height: "15px",
    borderRadius: "10px",
  }
  return (
    <section className="about">
      <header>
        <motion.h1
          initial={{ top: -160, position: "absolute" }}
          animate={{ top: 0, position: "relative" }}
          transition={{ duration: 2 }}
        >
          Who Am I?
        </motion.h1>
      </header>
      <main>
        <div>
          <motion.span
            className="span-1"
            initial={{ top: 150, position: "absolute" }}
            animate={{ top: 0, position: "relative" }}
            transition={{ duration: 2 }}
          >
            I am Front-End Developer
          </motion.span>
          <br />
          <motion.span
            className="span-2"
            initial={{ top: 200, position: "absolute" }}
            animate={{ top: 0, position: "relative" }}
            transition={{ duration: 2 }}
          >
            I have not any work experience but i got it by myself
          </motion.span>
          <br />
          <motion.span
            className="span-3"
            initial={{ top: 250, position: "absolute" }}
            animate={{ top: 0, position: "relative" }}
            transition={{ duration: 2 }}
          >
            i have done some projects, some ideas connected with projects is
            founded on google and some of the ideas are mine
          </motion.span>
          <br />
          <motion.span
            className="span-4"
            initial={{ top: 300, position: "absolute" }}
            animate={{ top: 0, position: "relative" }}
            transition={{ duration: 2 }}
          >
            All my projects are responsive and created as for desktop also for
            tablets and mobile phones
          </motion.span>
        </div>
      </main>
      <footer>
        <div className="all-about-skills">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            Skills:
          </motion.h2>
          <div className="skills">
            {skillsList.map((l, index) => {
              return (
                <motion.div
                  className="skill"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                >
                  <div>{l.name}</div>
                  <motion.div
                    style={progresiveDiv}
                    initial={{
                      background: `linear-gradient(to right,#3935fe 0%,#6361e0 100%)`,
                    }}
                    animate={{
                      background: `linear-gradient(to right,#3935fe ${
                        l.percent
                      }%,#6361e0 ${100 - l.percent}%)`,
                    }}
                    transition={{duration:3,delay:3}}
                  ></motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default About;

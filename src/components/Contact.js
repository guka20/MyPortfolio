import React, { useState, useRef, useContext, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import facebook from "../image/facebook.png";
import linkedin from "../image/linkedin.png";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { BsGithub } from "react-icons/bs";
import swal from "sweetalert";
import { AddressContext } from "../Routers/Routers";
const Contact = () => {
  const setAddress = useContext(AddressContext);
  useEffect(() => {
    setAddress("Contact");
  }, [setAddress]);
  const form = useRef();
  const [messageData, setMessageData] = useState({
    fullname: "",
    email: "",
    message: "",
    file: {},
  });
  const handleSendSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "myTemplate",
        form.current,
        "user_CqOF2xGmRkJUdquhTgaoK"
      )
      .then(
        function (response) {
          setMessageData({ ...messageData, message: "" });
          swal("Good job!","Your message sent successfully","success")
          console.log("succsess", response.status, response.text);
        },
        function (error) {}
      );
  };
  return (
    <div className="contact-main">
      <section className="contact">
        <header>
          <h1>Contact Me</h1>
        </header>
        <main>
          <form ref={form} onSubmit={handleSendSubmit}>
            <div className="inputs">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) =>
                  setMessageData({ ...messageData, fullname: e.target.value })
                }
                value={messageData.fullname}
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={messageData.email}
                onChange={(e) =>
                  setMessageData({ ...messageData, email: e.target.value })
                }
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="textarea">
              <label htmlFor="message">Message:</label>
              <textarea
                placeholder="Enter message..."
                onChange={(e) =>
                  setMessageData({ ...messageData, message: e.target.value })
                }
                value={messageData.message}
                name="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div className="send">
              <button type="submit">
                <span>Send </span>
                <FiSend size={23} />
              </button>
            </div>
          </form>
        </main>
        <footer>
          <div>My social:</div>
          <ul>
            <a
              href="https://www.facebook.com/gu.ka.75098/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="fb">
                <img src={facebook} alt="" />
              </li>
            </a>
            <a
              href="https://www.instagram.com/gukadavitadze/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="inst">
                <AiFillInstagram size={32} />
              </li>
            </a>
            <a
              href="https://github.com/guka20"
              target="_blank"
              rel="noreferrer"
            >
              <li className="git">
                <BsGithub size={32} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/gurami-davitadze-5013a8224/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="link">
                <img src={linkedin} alt="" />
              </li>
            </a>
          </ul>
        </footer>
      </section>
      <section className="info">
        <>
          <div className="full-name">
            <span>
              <b>Name:</b> Gurami
            </span>
            <span>
              <b>Surname:</b> Davitadze
            </span>
          </div>
          <div className="address">
            <span>
              <b>Address:</b> Georgia, Batumi
            </span>
          </div>
          <div className="number">
            <span>
              <b>My number:</b>
            </span>
            <span>(+995) 598-27-35-00</span>
          </div>
          <div className="email">
            <span>
              <b>My email:</b>
            </span>
            <span>guramidavitadze2002@gmail.com</span>
          </div>
        </>
      </section>
    </div>
  );
};

export default Contact;

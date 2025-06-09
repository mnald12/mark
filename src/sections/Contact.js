import "../styles/contact.css";
import {
  SiGmail,
  SiTelegram,
  SiSkype,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { SlCallIn } from "react-icons/sl";
import { AiOutlineSend } from "react-icons/ai";

import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Data } from "../Page";
import Goto from "../components/Goto";

const Contact = () => {
  const { ref3 } = useContext(Data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const form = useRef();

  const [infoText, setInfoText] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || msg === "") {
      setInfoText({
        status: "failed",
        text: "Oops! It looks like you missed some fields. Please complete the form before submitting.",
      });
      setTimeout(() => {
        setInfoText(null);
      }, 5000);

      return;
    }

    emailjs
      .sendForm(
        "service_manmxhm",
        "template_mjdoi5b",
        form.current,
        "W4QLjciGHEj19CYT5"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMsg("");
          setInfoText({
            status: "success",
            text: "Your message has been successfully sent. Thank you for taking the time to reach out to me!",
          });
          setTimeout(() => {
            setInfoText(null);
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          setInfoText({
            status: "failed",
            text: "Sorry, Your message was not sent successfully. Please try again, Thank you!",
          });
          setTimeout(() => {
            setInfoText(null);
          }, 10000);
        }
      );
  };

  return (
    <div ref={ref3} id="contacts">
      <div className="headline">
        <div className="headlines">
          <h1>Let's Collaborate</h1>
          <Goto section="CONTACTS" />
        </div>
        <p>
          Ready to bring your web project to life? I'm always eager to
          collaborate with clients who share a vision for a powerful online
          presence. Contact me today to discuss your project and turn your web
          ideas into reality.
        </p>
      </div>
      <div className="contact">
        <div className="contacts">
          <div className="contact-left">
            <a href="https://github.com/mnald12" className="conts">
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-ronald-sicad-334a3422b/"
              target="_blank"
              rel="noopener noreferrer"
              className="conts"
            >
              <SiLinkedin />
            </a>
            <a
              href="mailto:someone@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="conts"
            >
              <SiGmail />
            </a>
            <a
              href="tel:09277535961"
              target="_blank"
              rel="noopener noreferrer"
              className="conts"
            >
              <SlCallIn />
            </a>
            <a
              href="https://t.me/mnald12"
              target="_blank"
              rel="noopener noreferrer"
              className="conts"
            >
              <SiTelegram />
            </a>
            <a
              href="https://join.skype.com/invite/wnJEvodd9aUB"
              target="_blank"
              rel="noopener noreferrer"
              className="conts"
            >
              <SiSkype />
            </a>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              {infoText ? (
                <div
                  className={
                    infoText.status === "success"
                      ? "info-text success"
                      : "info-text failed"
                  }
                >
                  {infoText.text}
                </div>
              ) : (
                ""
              )}
              <div className="form-g">
                <label>Name : </label>
                <input
                  name="user_name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-g">
                <label>Email : </label>
                <input
                  name="user_email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-g">
                <label>Message : </label>
                <textarea
                  name="message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                ></textarea>
                <div className="btn-conts">
                  <button title="send" type="submit">
                    Send <AiOutlineSend />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

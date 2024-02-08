import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "../styles/contact.css";

const Contact = ({ listing }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kfstvlk", "template_rw2zp9c", form.current, {
        publicKey: "PkNDvuQ7XFSuWl7-2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-main">
      <form onSubmit={sendEmail} ref={form}>
        <input type="email" placeholder="email" name="user_email" className="contact-inp"/>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="3"
          className="contact-textarea"
          placeholder="Enter message"
        ></textarea>
        <button className="contact-bt" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

// id service_kfstvlk

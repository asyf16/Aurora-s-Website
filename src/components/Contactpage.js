import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import "./Popup.css";

function Contactpage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const form = useRef();
  const sendEmail = (e) => {
    if(document.getElementById("usernameinput").value!="" && document.getElementById("emailinput").value!="" && document.getElementById("messageinput").value!="" ){
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8ejgal",
        "template_3ry8v0a",
        form.current,
        "YiMPRDuUB3VH680FE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("done");
          toggleModal();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <>
      <div className="contact">
        <div className="leftSide">
            <center><img src="../cat.gif"></img></center>
        </div>
        <div className="rightSide">
          <h1>Shoot me a message!</h1>

          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              name="user_name"
              placeholder="Enter full name..."
              type="text"
              required
              id="usernameinput"
            />
            <label>Email</label>
            <input
            id="emailinput"
              name="user_email"
              placeholder="Enter email..."
              type="email"
              required
            />
            <label>Message</label>
            <textarea
            id="messageinput"
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button className="sendbutton" onClick={sendEmail}>
              Send
            </button>
          </form>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Message sent!</h2>
            <p>Thank you for contacting me. I will get back to you shortly!</p>
            <button
              className="popup-button"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contactpage;

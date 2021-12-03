import { useState } from "react";
import "./ContactUs.scss";
const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name + email + subject + message);
  };
  return (
    <div className="contact-us">
      <h1>CONTACT US</h1>
      <div className="border-div"></div>
      <p className="contact-us__para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed sit amet sapien
        sit amet odio lobortis ullamcorper quis vel nisl. Nam blandit maximus
        tristique. Vivamus enim quam, tincidunt vel blandit eu, molestie eget.
      </p>

      <div className="form-div-wrapper">
        <div className="company-data">
          <div className="box">
            <div className="box-title">Address</div>
            <div className="box-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div className="box">
            <div className="box-title">Phone number</div>
            <div className="box-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div className="box">
            <div className="box-title">E-mail address</div>
            <div className="box-text">lorem@ipsum.com</div>
          </div>
        </div>

        <form action="" className="contact-form">
          <div className="input-div">
            <input
              type="text"
              className="input-field"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <button className="submit-md-button" onClick={handleFormSubmit}>
              SEND MESSAGE
            </button>
          </div>
          <div className="textarea-div">
            <textarea
              className="textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
              aria-multiline
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="submit-sm-button" onClick={handleFormSubmit}>
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

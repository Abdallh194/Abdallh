import React, { useState } from "react";

function Contact() {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [msg, setMsg] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="overlay">
        <form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="PhoneNumber"
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="message"
            className="form-control"
            id="msg"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <input
            value="Submit"
            type="submit"
            className="form-control btn-primary"
          />
        </form>
        <h2>
          Thank You Mr {user} , We will contact you via {email}
        </h2>
      </div>
    </div>
  );
}

export default Contact;

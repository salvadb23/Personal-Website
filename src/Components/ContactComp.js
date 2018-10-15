import React, { Component } from "react";
import "../CSS/Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="f" id="Contact">
        <h3>
          Contact Me{" "}
          <span role="img" aria-label="Smiling emoji">
            😁
          </span>{" "}
        </h3>
        <div className="contact-form">
          <form action="">
            <label htmlFor="name" className="contactLabel">
              Name
            </label>
            <br />
            <input type="text" placeholder="Jane Doe..." name="name" />
            <br />
            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              placeholder="I would love if you could work on my website...."
              name="subject"
            />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="" cols="30" rows="10" />
            <br />
            {/* TODO: I need to figure out how I want this button styled */}
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

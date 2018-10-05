import React, { Component } from "react";
import "../CSS/Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="f" id="Contact">
        <h3>Contact Form</h3>
        <div className="contact-form">
          <form action="">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" placeholder="Jane Doe..." />
            <br />
            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              placeholder="I would love if you could work on my website...."
            />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="" cols="30" rows="10" />
            <br />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

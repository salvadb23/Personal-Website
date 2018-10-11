import React, { Component } from "react";
import "../CSS/Footer.css";
import SocialLinks from "./SocialLinks";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="copyCenter">&copy; William Bogans</p>
        <SocialLinks />
      </div>
    );
  }
}

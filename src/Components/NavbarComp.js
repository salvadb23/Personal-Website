import React, { Component } from "react";
import "../CSS/Navbar.css";
import SocialLinks from "../Components/SocialComps";

export default class Navbar extends Component {
  render() {
    return (
      <div className="a navBar">
        <label
          htmlFor="hamburger-menu"
          className="ham-sym"
          onClick={this.burgerToggle}
        >
          &#9776;
        </label>
        <input type="checkbox" id="hamburger-menu" />
        <ul className="side-links nav-toggle">
          <div>
            <a href="#Header">Main</a>
          </div>
          <div>
            <a href="#Portfolio">Portfolio</a>
          </div>
          <div>
            <a href="#TechTools">Tech Tools</a>
          </div>
          <div>
            <a href="#About">About</a>
          </div>
          <div>
            <a href="#Contact">Contact</a>
          </div>
          <div>
            {/* #TODO:send this to the blog sub domain
              <a href="#">Blog</a> */}
          </div>
          <SocialLinks />
        </ul>
      </div>
    );
  }
  burgerToggle() {
    let nav = document.querySelector(".navBar");
    nav.style.height === "10%"
      ? (nav.style.height = "100%")
      : (nav.style.height = "10%");
    // TODO: Put a style in here for animation purposes
  }
}

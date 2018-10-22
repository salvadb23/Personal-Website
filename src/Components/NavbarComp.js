import React, { Component } from "react";
import "../CSS/Navbar.css";
import SocialLinks from "../Components/SocialComps";

export default class Navbar extends Component {
  render() {
    return (
      <div className="a navBar">
        <label htmlFor="hamburger-menu" className="ham-sym">
          &#9776;
        </label>
        <input type="checkbox" id="hamburger-menu" />
        <ul className="side-links">
          <div className="Navbar-link">
            <a href="#Header">Main</a>
          </div>
          <div className="Navbar-link">
            <a href="#Portfolio">Portfolio</a>
          </div>
          <div className="Navbar-link">
            <a href="#TechTools">Tech Tools</a>
          </div>
          <div className="Navbar-link">
            <a href="#About">About</a>
          </div>
          <div className="Navbar-link">
            <a href="#Contact">Contact</a>
          </div>
          <div className="Navbar-link">
            <a href="#TODO:send this to the blog sub domain">Blog</a>
          </div>
          <SocialLinks />
        </ul>
      </div>
    );
  }
}

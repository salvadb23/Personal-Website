import React, { Component } from "react";
import "../CSS/Navbar.css";
import SocialLinks from "../Components/SocialComps";

export default class Navbar extends Component {
  render() {
    return (
      <div className="a navBar">
        {/* <input type="checkbox" id="toggle-menu" />
        <label htmlFor="toggle-menu" className="menu-on">
          &#9776;
        </label> */}
        <ul className="side-links">
          <li>
            <a href="#Header">Main</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#TechTools">Tech Tools</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          {/* <li>
            <a href="">Blog</a>
          </li> */}
        </ul>
        <SocialLinks />
      </div>
    );
  }
}

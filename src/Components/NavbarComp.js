import React, { Component } from "react";
import "../CSS/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="a navBar">
        <ul>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#TechTools">Tech Tools</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

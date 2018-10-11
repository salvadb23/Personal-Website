import React, { Component } from "react";
import "../CSS/Social.css";

export default class SocialComps extends Component {
  render() {
    return (
      <div>
        <ul className="social-links">
          <li>
            <a href="https://github.com/will0101">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/william-bogans-b5758a16b/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto:#">
              <i className="fas fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

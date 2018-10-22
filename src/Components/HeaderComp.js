import React, { Component } from "react";
import "../CSS/Header.css";
import "./SocialComps";
import SocialComps from "./SocialComps";
export default class Header extends Component {
  render() {
    return (
      <div className="b header" id="Header">
        <div id="overlay" />
        <div className="header-content">
          <p>
            <span className="my-name">William Bogans</span> <br />
            Currently studying at{" "}
            <a href="https://www.makeschool.com">Make School</a>
            <br />
            San Francisco, CA
            <br />
            Budding Full-Stack Developer
          </p>
          <SocialComps />
          <a href="#Portfolio">
            {" "}
            <i
              className="fa fa-arrow-down"
              onClick={this.scrollDown}
              aria-hidden="true"
              id="goDown"
            />
          </a>
        </div>
      </div>
    );
  }
}

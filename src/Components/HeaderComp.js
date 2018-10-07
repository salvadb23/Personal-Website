import React, { Component } from "react";
import "../CSS/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="b header" id="Header">
        <div className="container">
          <img src="" alt="Me" />
          <p>Full Stack Engineer</p>
          <p>
            Student at
            <a href="https://www.makeschool.com/"> Make School</a>
          </p>
        </div>
      </div>
    );
  }
}

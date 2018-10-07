import React, { Component } from "react";
import "../CSS/About.css";
export default class About extends Component {
  render() {
    return (
      <div className="e" id="About">
        <h3>About</h3>
        <p>
          Howdy! My name is William Bogans, a native of Savannah, Georgia. I'm
          currently located in SF, California attending{" "}
          <a href="https://www.makeschool.com/"> Make School</a>. When I'm not
          writing 1's and 0's, you can find me trekking around San Francisco
          seeking out new eateries to fill my stomach.
        </p>
      </div>
    );
  }
}

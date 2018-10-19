import React, { Component } from "react";
import "../CSS/About.css";
import me from "../media/Me.png";
export default class About extends Component {
  render() {
    return (
      <div className="e" id="About">
        <h3>About</h3>
        <div className="about-section">
          <img src={me} alt="Me" />
          <p>
            Howdy! My name is William Bogans. A native of Atlanta, Georgia but
            raised in Savannah, GA. I'm currently located in SF, California
            attending <a href="https://www.makeschool.com/"> Make School</a>.
            When I'm not writing 1's and 0's, you can find me trekking around
            San Francisco seeking out new eateries to fill my stomach.
          </p>
        </div>
      </div>
    );
  }
}

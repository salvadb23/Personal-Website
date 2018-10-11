import React, { Component } from "react";
import "../CSS/TechTools.css";

export default class TechTools extends Component {
  render() {
    return (
      <div className="d" id="TechTools">
        {/* TODO:Finish putting in all the logos and colors, but besides that I'm pretty much done with this section */}
        <h3>Tech Tools</h3>
        <div className="techTools">
          <ul>
            <h4>Languages</h4>
            <li>
              Javascript <i className="fab fa-js-square " />
            </li>
            <li>
              Python <i className="fab fa-python " />
            </li>
          </ul>
          <ul>
            <h4>Frameworks</h4>
            <li>
              React <i className="fab fa-react" />
            </li>
            <li>Django</li>
          </ul>
          <ul>
            <h4>Tools</h4>
            <li>
              Git/Github
              <i
                className="fab fa-git-square
               "
              />{" "}
              <i
                className="fab fa-github-square
               "
              />
            </li>
            <li>
              Slack <i className="fab fa-slack-hash" />
            </li>
            <li>
              Sketch <i className="fas fa-gem" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

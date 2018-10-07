import React, { Component } from "react";
import "../CSS/TechTools.css";

export default class TechTools extends Component {
  render() {
    return (
      <div className="d" id="TechTools">
        {/* TODO:Put logos's of associated to the names */}
        <h3>Tech Tools</h3>
        <div className="techTools">
          <ul>
            <h4>Languages</h4>
            <li>
              Javascript <i class="fab fa-js-square " />
            </li>
            <li>
              Python <i class="fab fa-python " />
            </li>
          </ul>
          <ul>
            <h4>Frameworks</h4>
            <li>
              React <i class="fab fa-react" />
            </li>
            <li>
              Django <i class="fab fa-react" />
            </li>
          </ul>
          <ul>
            <h4>Tools</h4>
            <li>
              Git/Github
              <i
                class="fab fa-git-square
               "
              />{" "}
              <i
                class="fab fa-github-square
               "
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

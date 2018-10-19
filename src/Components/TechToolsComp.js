import React, { Component } from "react";
import git from "../media/tech-tools-logos/git.png";
import python from "../media/tech-tools-logos/python.png";
import ruby from "../media/tech-tools-logos/ruby.png";
import django from "../media/tech-tools-logos/django.jpg";
import slack from "../media/tech-tools-logos/slack.png";
import "../CSS/TechTools.css";
import sketch from "../media/tech-tools-logos/sketch.png";

export default class TechTools extends Component {
  render() {
    return (
      <div className="d" id="TechTools">
        <h3>Tech Tools</h3>
        <div className="techTools">
          <ul>
            <h4>Languages</h4>
            <li>
              Javascript <i className="fab fa-js-square " />
            </li>
            <li>
              Python <img src={python} alt="Python logo" srcset="" />
            </li>
            <li>
              Ruby <img src={ruby} alt="Ruby logo" srcset="" />
            </li>
          </ul>
          <ul>
            <h4>Frameworks</h4>
            <li>
              React <i className="fab fa-react" />
            </li>
            <li>
              Django <img src={django} alt="Django logo" srcset="" />
            </li>
          </ul>
          <ul>
            <h4>Tools</h4>
            <li>
              Git/Github
              <img src={git} alt="git logo" srcSet="" />
              <i
                className="fab fa-github-square
               "
              />
            </li>
            <li>
              Slack <img src={slack} alt="Slack logo" srcset="" />
            </li>
            <li>
              Sketch <img src={sketch} alt="Sketch logo" srcset="" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

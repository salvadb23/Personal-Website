import React, { Component } from "react";
import comingSoon from "../media/comingsoon1.png";

import "../CSS/Portfolio.css";

export default class PortfolioSect extends Component {
  render() {
    return (
      <div className="c" id="Portfolio">
        <h3>Portfolio</h3>
        <div className="port-section">
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Client: Lorem, ipsum. <br />
              Tech Used: Lorem ipsum dolor sit amet. <br />
              Project Date:?
            </p>
          </div>
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              ipsa!
            </p>
          </div>
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              ipsa!
            </p>
          </div>
        </div>

        <div className="port-section">
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              ipsa!
            </p>
          </div>
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              ipsa!
            </p>
          </div>
          <div className="card">
            <img src={comingSoon} alt="One of my projects" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              ipsa!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

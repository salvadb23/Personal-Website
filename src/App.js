import React, { Component } from "react";
import "./CSS/Global.css";

import Navbar from "./Components/NavbarComp";
import Header from "./Components/HeaderComp";
import Portfolio from "./Components/PortfolioComp";
import TechTools from "./Components/TechToolsComp";
import About from "./Components/AboutComp";

// TODO: Pick a color scheme and a font, when a user clicks on one of the links in the sidenav, instead jumping to it, how about we just swap out the header with the content of the section

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />

          <Header />
          <Portfolio />
          <TechTools />
          <About />
        </div>
      </div>
    );
  }
}

export default App;

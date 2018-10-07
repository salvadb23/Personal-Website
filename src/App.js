import React, { Component } from "react";

import Navbar from "./Components/NavbarComp";
import Header from "./Components/HeaderComp";
import Portfolio from "./Components/PortfolioComp";
import TechTools from "./Components/TechToolsComp";
import About from "./Components/AboutComp";
import Contact from "./Components/ContactComp";

import "./CSS/Global.css";

// TODO: Pick a color scheme and a font

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
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;

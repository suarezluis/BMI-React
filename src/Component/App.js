import React, { Component } from "react";

import "../Styles/App.css";

import Navbar from "./Navbar";
import Title from "./Title";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";

// Keep server awake
var http = require("http");
setInterval(function() {
  http.get("https://suarezluis-react-bmi.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bmi: 23.5,
      gender: "male",
      height: 64,
      heightUnit: "in",
      legend: "Normal",
      weight: 137,
      weightUnit: "lb"
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(object) {
    this.setState(object);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Title />
        <Form
          updateState={this.updateState}
          weight={this.state.weight}
          height={this.state.height}
        />
        <Result
          updateState={this.updateState}
          weight={this.state.weight}
          height={this.state.height}
          weightUnit={this.state.weightUnit}
          heightUnit={this.state.heightUnit}
          legend={this.state.legend}
          gender={this.state.gender}
        />

        <Footer />
      </div>
    );
  }
}

export default App;

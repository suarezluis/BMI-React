import React, { Component } from "react";

import "../Styles/App.css";

import Navbar from "./Navbar";
import Title from "./Title";
import Form from "./Form";
import Result from "./Result";
import BodyImage from "./BodyImage";

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
        <Form updateState={this.updateState} values={this.state} />
        <Result
          updateState={this.updateState}
          bmi={this.state.bmi}
          legend={this.state.legend}
        />
        <BodyImage legend={this.state.legend} gender={this.state.gender} />
      </div>
    );
  }
}

export default App;

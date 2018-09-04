import React, { Component } from "react";

class Result extends Component {
  render() {
    const bmi = this.props.bmi;
    const legend = this.props.legend;
    return (
      <div>
        <h1>
          Your Body Mass Index is: {bmi} and this is considered{" "}
          <strong>{legend}</strong>{" "}
        </h1>
      </div>
    );
  }
}

export default Result;

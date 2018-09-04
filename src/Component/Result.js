import React, { Component } from "react";

import { calculateBMI, translateBMItoText } from "../functions";

import BodyImage from "./BodyImage";

class Result extends Component {
  render() {
    const bmi = parseFloat(
      calculateBMI(
        this.props.height,
        this.props.weight,
        this.props.heightUnit,
        this.props.weightUnit
      )
    );

    const legend = translateBMItoText(bmi);

    return (
      <div>
        <h1>
          Your Body Mass Index is: {isNaN(bmi) ? "LoAdInG..." : bmi} and this is
          considered
          <span /> <strong>{legend}</strong>
        </h1>
        <BodyImage legend={legend} gender={this.props.gender} />
      </div>
    );
  }
}

export default Result;

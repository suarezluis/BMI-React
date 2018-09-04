import React, { Component } from "react";
import { calculateBMI, translateBMItoText } from "../functions";

class Form extends Component {
  updateState(name, value) {
    const bmi = parseFloat(
      calculateBMI(
        this.props.values.height,
        this.props.values.weight,
        this.props.values.heightUnit,
        this.props.values.weightUnit
      )
    );
    const update = {
      bmi: bmi,
      legend: translateBMItoText(bmi)
    };
    update[name] = value;
    this.props.updateState(update);
  }

  render() {
    return (
      <div>
        <form action="">
          <select
            onChange={event =>
              this.updateState(event.target.name, event.target.value)
            }
            name="gender"
            id=""
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="" />
          <input
            onChange={event =>
              this.updateState(event.target.name, parseInt(event.target.value))
            }
            type="number"
            name="weight"
            id=""
            value={this.props.values.weight}
          />
          <select
            onChange={event =>
              this.updateState(event.target.name, event.target.value)
            }
            name="weightUnit"
            id=""
          >
            <option value="lb">Pounds</option>
            <option value="kg">Kilograms</option>
          </select>
          <label htmlFor="" />
          <input
            onChange={event =>
              this.updateState(event.target.name, parseInt(event.target.value))
            }
            type="number"
            name="height"
            id=""
            value={this.props.values.height}
          />
          <select
            onChange={event =>
              this.updateState(event.target.name, event.target.value)
            }
            name="heightUnit"
            id=""
          >
            <option value="in">Inches</option>
            <option value="cm">Centimeters</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;

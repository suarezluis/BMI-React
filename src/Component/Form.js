import React, { Component } from "react";

class Form extends Component {
  updateState(name, value) {
    const update = {};
    update[name] = value;
    this.props.updateState(update);
  }

  render() {
    return (
      <div className="form">
        <form action="">
          <label>Gender</label>
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
          <br />
          <label>Weight</label>
          <input
            onChange={event =>
              // eslint-disable-next-line
              this.updateState(
                event.target.name,
                parseFloat(event.target.value)
              )
            }
            type="number"
            name="weight"
            id=""
            value={this.props.weight}
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
          <br />
          <label>Height</label>
          <input
            onChange={event =>
              // eslint-disable-next-line
              this.updateState(
                event.target.name,
                parseFloat(event.target.value)
              )
            }
            type="number"
            name="height"
            id=""
            value={this.props.height}
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

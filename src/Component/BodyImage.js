import React, { Component } from "react";

class BodyImage extends Component {
  render() {
    const filename = `${this.props.legend.toLowerCase()}-${
      this.props.gender
    }.png`;

    return (
      <div>
        <img src={`./IMG/${filename}`} alt={`${this.props.legend} body`} />
      </div>
    );
  }
}

export default BodyImage;

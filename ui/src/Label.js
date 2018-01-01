import React, { Component } from "react";
import { Badge } from "reactstrap";

class Label extends Component {
  render() {
    let text = `${this.props.name}: ${this.props.value}`;
    let color = "primary";
    return (
      <Badge key={text} color={color} style={this.props.style}>
        {text}
      </Badge>
    );
  }
}

export default Label;

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import NonLinkAnnotations from "./Annotations";
import Label from "./Label";

class Alert extends Component {
  renderLinkAnnotations() {
    const annotations = this.props.annotations.map(function(annotation, i) {
      if (annotation.isLink) {
        return (
          <ListGroupItem key={annotation.name}>
            {annotation.name}: {annotation.value}
          </ListGroupItem>
        );
      }
    });
    return <ListGroup>{annotations}</ListGroup>;
  }

  renderLabels() {
    let labels = [];
    for (let [name, value] of Object.entries(this.props.labels)) {
      labels.push(<Label name={name} value={value} />);
    }
    return labels;
  }

  renderStaticElements() {}

  renderSilence() {}

  render() {
    return (
      <div>
        <NonLinkAnnotations annotations={this.props.annotations} />
        {this.renderLabels()}
        {this.renderLinkAnnotations()}
        {this.renderStaticElements()}
        {this.renderSilence()}
      </div>
    );
  }
}

export default Alert;

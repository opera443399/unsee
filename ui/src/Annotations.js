import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Annotation extends Component {
  render() {
    return (
      <ListGroupItem>
        {this.props.name}: {this.props.value}
      </ListGroupItem>
    );
  }
}

class NonLinkAnnotations extends Component {
  render() {
    let filteredAnnotations = [];
    for (let key in this.props.annotations) {
      if (!this.props.annotations[key].isLink) {
        filteredAnnotations.push(this.props.annotations[key]);
      }
    }
    const annotations = filteredAnnotations.map(annotation => (
      <Annotation
        key={annotation.name}
        name={annotation.name}
        value={annotation.value}
      />
    ));
    return <ListGroup>{annotations}</ListGroup>;
  }
}

export default NonLinkAnnotations;

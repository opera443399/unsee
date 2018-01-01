import React, { Component } from "react";
import { Badge, Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faShareSquare from "@fortawesome/fontawesome-free-solid/faShareSquare";

import Alert from "./Alert";
import Label from "./Label";
import "./AlertGroup.css";

const AlertGroupClass = "unsee-alert-grid-group";

class AlertGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: props.group
    };
  }

  renderGroupLink() {
    let filters = ["@receiver=" + this.state.group.receiver];
    for (let [key, value] of Object.entries(this.state.group.labels)) {
      filters.push(key + "=" + value);
    }
    // FIXME this should some code that formats the link with filters
    let groupLink = "?q=" + filters.join(",");
    return (
      <a href={groupLink}>
        <FontAwesomeIcon icon={faShareSquare} />
      </a>
    );
  }

  renderLabels() {
    let labels = [];
    for (let [name, value] of Object.entries(this.state.group.labels)) {
      labels.push(
        <Label name={name} value={value} style={{ "font-size": "90%" }} />
      );
    }
    return labels;
  }

  renderBadge() {
    if (this.state.group.alerts.length > 1) {
      return (
        <Badge color="secondary" style={{ "font-size": "90%" }}>
          {this.state.group.alerts.length}
        </Badge>
      );
    }
  }

  headerBgClass() {
    if (this.state.group.stateCount.active > 0) {
      return "bg-danger";
    } else if (this.state.group.stateCount.suppressed > 0) {
      return "bg-success";
    } else {
      return "bg-default";
    }
  }

  render() {
    const alerts = this.state.group.alerts.map(alert => (
      <ListGroupItem>
        <Alert
          key={alert.labels}
          annotations={alert.annotations}
          labels={alert.labels}
        />
      </ListGroupItem>
    ));
    return (
      <div className={AlertGroupClass}>
        <Card style={{ border: "0" }}>
          <CardHeader className={this.headerBgClass()}>
            {this.renderGroupLink()}
            {this.renderLabels()}
            {this.renderBadge()}
          </CardHeader>
          <ListGroup flush={true}>{alerts}</ListGroup>
        </Card>
      </div>
    );
  }
}

export { AlertGroupClass, AlertGroup };

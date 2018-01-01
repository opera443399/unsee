import React, { Component } from "react";
import { connect } from "react-refetch";
import Masonry from "react-masonry-component";

import { AlertGroup, AlertGroupClass } from "./AlertGroup";
import "./AlertGrid.css";

// masonry helper div for sizing elements
const AlertGridSizerClass = "unsee-alert-grid-sizer";

var masonryOptions = {
  itemSelector: "." + AlertGroupClass,
  columnWidth: "." + AlertGridSizerClass,
  percentPosition: true,
  transitionDuration: "0.4s",
  hiddenStyle: {
    opacity: 0
  },
  visibleStyle: {
    opacity: 1
  }
};

class AlertGrid extends Component {
  render() {
    const { api } = this.props;
    if (api.pending) {
      return <div>Loading</div>;
    } else if (api.rejected) {
      return <div>{api.reason}</div>;
    } else if (api.fulfilled) {
      return (
        <Masonry options={masonryOptions}>
          <div className={AlertGridSizerClass} />
          {api.value.groups.map((group, i) => (
            <AlertGroup key={group.id} group={group} />
          ))}
        </Masonry>
      );
    }
  }
}

export default connect(props => ({
  api: {
    url: "http://localhost:8080/alerts.json",
    refresh: true,
    refreshInterval: 15000
  }
}))(AlertGrid);

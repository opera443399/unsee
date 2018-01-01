import React, { Component } from "react";

import TopNav from "./TopNav";
import AlertGrid from "./AlertGrid";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <AlertGrid />
      </div>
    );
  }
}

export default App;

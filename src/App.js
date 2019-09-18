import React, { Component } from "react";
import { Visual } from "./components/Visual";
import { Data } from "./components/DataView";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showData: false,
      showVisualPart: true
    };
  }

  render() {
    const onClick = () => {
      this.setState({showData: true, showVisualPart: false})
    };

    if (this.state.showVisualPart) {
      return (
        <Visual onClick={onClick}/>
      );
    } else if (this.state.showData) {
      return (
        <Data/>
      );
    } else {
      return (
        <div>błąd</div>);
    }
  }
}

export default App;

import React, { Component } from "react";
import { withThemeRoot } from "@demo/theme";

class Wrapper extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fafafa" }}>{this.props.children}</div>
    );
  }
}

export default withThemeRoot(Wrapper);

var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/theme/src/withThemeRoot.js";
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline"; // A theme with custom primary and secondary color.
// It's optional.

var theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    secondary: {
      light: green[500],
      main: green[700],
      dark: green[900]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return React.createElement(MuiThemeProvider, {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, React.createElement(CssBaseline, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })));
  }

  return WithRoot;
}

export default withRoot;
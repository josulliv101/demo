var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/store/src/withStore.js";
import React from "react";
import { Provider } from "react-redux";
import createStore from "./createStore";

function withStore(Component) {
  function withStoreEnhanced(props) {
    var store = createStore();
    return React.createElement(React.StrictMode, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, React.createElement(Provider, {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }))));
  }

  return withStoreEnhanced;
}

export default withStore;
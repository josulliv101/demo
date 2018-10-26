import _classCallCheck from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/api/src/index.js";
import React, { Component } from "react";
import unfetch from "unfetch";

var makeEndpoint = function makeEndpoint(domain) {
  return function (path) {
    return unfetch("".concat(domain).concat(path)).then(function (resp) {
      return resp.json();
    });
  };
};

var fetch = makeEndpoint("https://jsonplaceholder.typicode.com");
export var fetchUserList = function fetchUserList() {
  return fetch("/users");
};
export var fetchPostList = function fetchPostList() {
  return fetch("/posts");
};
export var fetchPostListForUser = function fetchPostListForUser(_ref) {
  var userId = _ref.userId;
  return fetch("/users/".concat(userId, "/posts"));
}; // Over simplified fetch HOC

export function withFetch(fn) {
  return function HOCFactory(WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(HOC, _React$Component);

        function HOC() {
          _classCallCheck(this, HOC);

          return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
        }

        _createClass(HOC, [{
          key: "triggerActions",
          value: function triggerActions() {
            if (typeof fn === "function") {
              fn(this.props);
            }
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.triggerActions();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {// Handle cancelling of fetch here
          }
        }, {
          key: "render",
          value: function render() {
            return React.createElement(WrappedComponent, Object.assign({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            }));
          }
        }]);

        return HOC;
      }(React.Component)
    );
  };
}
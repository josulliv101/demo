import _classCallCheck from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/hocs/src/withCallout/index.js";
import React from "react";
import PropTypes from "prop-types";
import { branch, renderComponent } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
/*
 *  This HOC is not really needed... it does same exact thing as the following would:
 *
 *  <Callout title="foo">
 *    <SomeComponent>
 *      foo bar
 *    </SomeComponent>
 *  </Callout>
 *
 *  But this approach can be a good match for lots. See @demo/app/pages for example usage.
 * 
 */

var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: "#fafafa",
      width: 480,
      height: 440,
      overflow: "auto"
    },
    subheader: {
      borderBottom: "1px #ccc solid"
    }
  };
}; // Quick & dirty... missing lots.


export default function withCallout(title) {
  return function WithCallout(WrappedComponent) {
    var Cmp =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithCalloutExtended, _React$Component);

      function WithCalloutExtended() {
        _classCallCheck(this, WithCalloutExtended);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithCalloutExtended).apply(this, arguments));
      }

      _createClass(WithCalloutExtended, [{
        key: "render",
        value: function render() {
          return React.createElement(List, {
            className: this.props.classes.root,
            subheader: React.createElement(ListSubheader, {
              className: this.props.classes.subheader,
              component: "div",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, title),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, React.createElement(WrappedComponent, Object.assign({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          })));
        }
      }]);

      return WithCalloutExtended;
    }(React.Component);

    return withStyles(styles)(Cmp);
  };
}
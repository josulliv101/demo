import _objectWithoutProperties from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/ui-core/src/components/ReallyBigButton/index.js";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import ButtonBase from "@material-ui/core/Button"; // Quick and dirty styling lifted from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js

var styles = function styles(theme) {
  return {
    root: _objectSpread({}, theme.typography.h6, {
      padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit * 4, "px")
    }),
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(fade(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(fade(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark
      }
    }
  };
};

function ReallyBigButton(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["classes"]);

  return React.createElement(ButtonBase, Object.assign({
    classes: classes
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), props.children);
}

ReallyBigButton.defaultProps = {};
ReallyBigButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}; // Helpful to set name for display in jest snapshots.
// TODO See recompose for possible better way to set displayName.
// Button.displayName = "CoreButton";

export default withStyles(styles)(ReallyBigButton);
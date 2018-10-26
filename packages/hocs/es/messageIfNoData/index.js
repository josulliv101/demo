var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/hocs/src/messageIfNoData/index.js";
import React from "react";
import PropTypes from "prop-types";
import { branch, renderComponent } from "recompose";
import Typography from "@material-ui/core/Typography"; // This should proably live somewhere else. For now good here.

var StandardMessage = function StandardMessage() {
  return React.createElement(Typography, {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "This component was passed no data.");
}; // See @demo/ui-core/Collage for example usage


var messageIfNoData = function messageIfNoData(hasNoData) {
  return branch(hasNoData, renderComponent(StandardMessage));
};

export default messageIfNoData;
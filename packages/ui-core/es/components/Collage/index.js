import _defineProperty from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
var _jsxFileName = "/Users/josulliv101/node/demo-app/packages/ui-core/src/components/Collage/index.js";
import React from "react";
import PropTypes from "prop-types";
import { branch, compose, renderComponent } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import { messageIfNoData } from "@demo/hocs";

var styles = function styles(theme) {
  return {
    gridlist: _defineProperty({
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      padding: 4,
      width: 480,
      height: 388
    }, "overflow", "auto")
  };
}; //  Taken from https://material-ui.com/demos/grid-list/ gridlist example


function Collage(props) {
  var classes = props.classes,
      tileData = props.tileData;
  return React.createElement("div", {
    className: classes.gridlist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, React.createElement(GridList, {
    cellHeight: 160,
    className: classes.gridList,
    cols: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, tileData.map(function (tile) {
    return React.createElement(GridListTile, {
      key: tile.img,
      cols: tile.cols || 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, React.createElement("img", {
      src: tile.img,
      alt: tile.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  })));
}

Collage.propTypes = {
  tileData: PropTypes.array.isRequired
};
var enhance = compose(messageIfNoData( // Provide the test to see if message component should display
function (_ref) {
  var tileData = _ref.tileData;
  return !tileData;
}), withStyles(styles));
export default enhance(Collage);
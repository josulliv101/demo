import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "calc(100vh - 64px - 48px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: theme.palette.common.white
  }
});

function AppFrame(props) {
  const { children, classes } = props;
  return <main className={classes.root}>{children}</main>;
}

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppFrame);

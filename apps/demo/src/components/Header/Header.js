import React from "react";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LoadIndicator from "../LoadIndicator";

const styles = {
  root: {
    flexGrow: 1
  },
  brand: {
    fontWeight: 700
  },
  grow: {
    flexGrow: 1
  },
  loading: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const MenuBtn = () => (
  <Button component={Link} color="inherit" to="/menu">
    Back to Menu
  </Button>
);

function Header(props) {
  const { classes, isLoading } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            to="/"
            color="inherit"
            component={Link}
            className={classes.brand}
            size="large"
            disableRipple
          >
            Demo App
          </Button>
          <div className={classes.loading}>
            <LoadIndicator isLoading={isLoading} />
          </div>
          <div className={classes.grow} />
          <Switch>
            <Route exact path="/" />
            <Route path="/menu" />
            <Route component={MenuBtn} />
          </Switch>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.defaultProps = {
  isLoading: false
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

export default withStyles(styles)(Header);

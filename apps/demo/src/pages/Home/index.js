import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ReallyBigButton } from "@demo/ui-core";

const styles = theme => ({
  btn: {
    margin: theme.spacing.unit
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ReallyBigButton
          className={classes.btn}
          color="secondary"
          component={Link}
          to="/menu"
          variant="contained"
        >
          Check out demo
        </ReallyBigButton>
        <Button
          className={classes.btn}
          color="inherit"
          href="https://github.com/josulliv101/demo-app"
          size="large"
          target="_blank"
        >
          View on Github
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

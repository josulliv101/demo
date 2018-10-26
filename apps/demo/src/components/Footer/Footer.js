import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose, withHandlers, withState } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function Footer(props) {
  const { classes, handleDialogClose, handleDialogOpen, isModalOpen } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar variant="dense">
            <Typography
              variant="body1"
              color="inherit"
              className={classes.grow}
            >
              Welcome to the Demo App
            </Typography>
            <Button color="inherit" onClick={handleDialogOpen}>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Dialog
        onClose={handleDialogClose}
        open={isModalOpen}
        aria-labelledby="about-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle id="about-dialog-title">About This App</DialogTitle>
        <DialogContent>
          <DialogContentText component="div">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="default">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export const handleDialogClose = props => event => {
  props.setModalOpen(false);
};

export const handleDialogOpen = props => event => {
  props.setModalOpen(true);
};

const enhance = compose(
  withState("isModalOpen", "setModalOpen", false),
  // Order here matters (withState HOC wraps around withHandlers HOC) since the close/open handlers
  // are making use of withState's `setModalOpen` function which it gets passed-in as props.
  withHandlers({ handleDialogClose, handleDialogOpen }),
  withStyles(styles)
);

export default enhance(Footer);

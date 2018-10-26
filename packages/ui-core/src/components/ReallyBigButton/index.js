import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import ButtonBase from "@material-ui/core/Button";

// Quick and dirty styling lifted from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js
const styles = theme => ({
  root: {
    ...theme.typography.h6,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`
  },
  textPrimary: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      )
    }
  },
  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      )
    }
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      )
    }
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: fade(
        theme.palette.secondary.main,
        theme.palette.action.hoverOpacity
      )
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
});

function ReallyBigButton({ classes, ...props }) {
  return (
    <ButtonBase classes={classes} {...props}>
      {props.children}
    </ButtonBase>
  );
}

ReallyBigButton.defaultProps = {};

ReallyBigButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

// Helpful to set name for display in jest snapshots.
// TODO See recompose for possible better way to set displayName.
// Button.displayName = "CoreButton";

export default withStyles(styles)(ReallyBigButton);

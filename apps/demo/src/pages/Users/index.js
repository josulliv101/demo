import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import idx from "idx.macro";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import PostsIcon from "@material-ui/icons/ListAlt";
import { withFetch } from "@demo/api";
import { userActions } from "@demo/store";
import { withCallout } from "@demo/hocs";
import CustomSnackbar from "../../components/Snackbar";

const styles = theme => ({
  tooltip: {
    fontSize: 12
  }
});

class Users extends Component {
  render() {
    const { classes, closeSnackbar, openSnackbar, showSnackbar } = this.props;
    const items = this.props.users.map(user => (
      <ListItem button key={user.id} onClick={openSnackbar}>
        <ListItemText primary={user.name} secondary={user.email} />
        <Tooltip
          title="View Post"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <PostsIcon color="secondary" />
        </Tooltip>
      </ListItem>
    ));

    return (
      <Fragment>
        <List
          // className={classes.root}
          component="nav"
        >
          {items}
        </List>
        <CustomSnackbar
          message="'View Post' to be implemented..."
          closeSnackbar={closeSnackbar}
          openSnackbar={openSnackbar}
          showSnackbar={showSnackbar}
        />
      </Fragment>
    );
  }
}

Users.defaultProps = {
  users: []
};

const mapStateToProps = state => ({
  // Test out a babel macro
  users: idx(state, _ => _.users.userList.data)
});

const withConnect = connect(
  mapStateToProps,
  { ...userActions }
);

const enhance = compose(
  withConnect,
  withState("showSnackbar", "setShowSnackbar", false),
  withHandlers({
    openSnackbar: props => () => props.setShowSnackbar(true),
    closeSnackbar: props => () => props.setShowSnackbar(false)
  }),
  withFetch(props => props.$fetchUserList()),
  withCallout("Some people"),
  withStyles(styles)
);

export default enhance(Users);

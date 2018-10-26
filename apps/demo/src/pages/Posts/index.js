import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";
import idx from "idx.macro";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withFetch } from "@demo/api";
import { postActions } from "@demo/store";
import { withCallout } from "@demo/hocs";
import CustomSnackbar from "../../components/Snackbar";

class Posts extends Component {
  render() {
    const { closeSnackbar, openSnackbar, showSnackbar } = this.props;
    const items = this.props.posts.map(post => (
      <ListItem button divider key={post.id} onClick={openSnackbar}>
        <ListItemText primary={post.title} secondary={`${post.body}`} />
      </ListItem>
    ));

    return (
      <Fragment>
        <List component="nav">{items}</List>
        <CustomSnackbar
          message="To be implemented..."
          closeSnackbar={closeSnackbar}
          openSnackbar={openSnackbar}
          showSnackbar={showSnackbar}
        />
      </Fragment>
    );
  }
}

Posts.defaultProps = {
  posts: []
};

const mapStateToProps = state => ({
  // Test out a babel macro
  posts: idx(state, _ => _.posts.postList.data)
});

const withConnect = connect(
  mapStateToProps,
  { ...postActions }
);

const enhance = compose(
  withConnect,
  withState("showSnackbar", "setShowSnackbar", false),
  withHandlers({
    openSnackbar: props => () => props.setShowSnackbar(true),
    closeSnackbar: props => () => props.setShowSnackbar(false)
  }),
  withFetch(props => props.$fetchPostList()),
  withCallout("Some posts")
);

export default enhance(Posts);

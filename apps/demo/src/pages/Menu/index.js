import React from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import UsersIcon from "@material-ui/icons/People";
import PostsIcon from "@material-ui/icons/ListAlt";
import PhotoIcon from "@material-ui/icons/Photo";
import { withCallout } from "@demo/hocs";

function Menu(props) {
  return (
    <List component="nav">
      <ListItem
        button
        divider
        component={props => <Link to="/users" {...props} />}
      >
        <Avatar>
          <UsersIcon />
        </Avatar>
        <ListItemText primary="People" secondary="View a bunch of users" />
      </ListItem>
      <ListItem
        button
        divider
        component={props => <Link to="/posts" {...props} />}
      >
        <Avatar>
          <PostsIcon />
        </Avatar>
        <ListItemText primary="Posts" secondary="View posts by users" />
      </ListItem>
      <ListItem
        button
        divider
        component={props => <Link to="/photos" {...props} />}
      >
        <Avatar>
          <PhotoIcon />
        </Avatar>
        <ListItemText primary="Photos" secondary="Some pictures" />
      </ListItem>
    </List>
  );
}

export default compose(withCallout("Menu"))(Menu);

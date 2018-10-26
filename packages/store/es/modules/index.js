import * as users from "./users/reducers";
import * as posts from "./posts/reducers";
export var getReducers = function getReducers() {
  return {
    users: users,
    posts: posts
  };
};
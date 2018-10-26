import * as users from "./users/reducers";
import * as posts from "./posts/reducers";

export const getReducers = () => ({
  users,
  posts
});

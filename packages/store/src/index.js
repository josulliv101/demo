import * as userActionsBase from "./modules/users/actions";
import * as postActionsBase from "./modules/posts/actions";

// Refactor

export { default as withStore } from "./withStore";

export const userActions = {
  ...userActionsBase
};

export const postActions = {
  ...postActionsBase
};

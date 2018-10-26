import _objectSpread from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
import * as userActionsBase from "./modules/users/actions";
import * as postActionsBase from "./modules/posts/actions"; // Refactor

export { default as withStore } from "./withStore";
export var userActions = _objectSpread({}, userActionsBase);
export var postActions = _objectSpread({}, postActionsBase);
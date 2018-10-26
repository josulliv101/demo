import _objectSpread from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread";
import { composeReducers } from "redux-toolbelt";
import { getReducers } from "./modules";
var reducers = composeReducers(_objectSpread({}, getReducers()));
export default reducers;
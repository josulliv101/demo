import { composeReducers } from "redux-toolbelt";
import { getReducers } from "./modules";

const reducers = composeReducers({
  ...getReducers()
});

export default reducers;

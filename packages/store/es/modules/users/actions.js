import { makeActionCreators } from "../../utils";

var _makeActionCreators = makeActionCreators("users")(),
    makeAction = _makeActionCreators.makeAction,
    makeAsyncAction = _makeActionCreators.makeAsyncAction;

export var $fetchUserList = makeAsyncAction("FETCH_USER_LIST");
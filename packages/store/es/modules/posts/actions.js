import { makeActionCreators } from "../../utils";

var _makeActionCreators = makeActionCreators("posts")(),
    makeAction = _makeActionCreators.makeAction,
    makeAsyncAction = _makeActionCreators.makeAsyncAction;

export var $fetchPostList = makeAsyncAction("FETCH_POST_LIST");
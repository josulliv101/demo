import { makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { $fetchPostList } from "./actions";
export var postList = makeAsyncReducer($fetchPostList);
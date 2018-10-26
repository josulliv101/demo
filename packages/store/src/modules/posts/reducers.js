import { makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { $fetchPostList } from "./actions";

export const postList = makeAsyncReducer($fetchPostList);

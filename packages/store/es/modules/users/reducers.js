import { makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { $fetchUserList } from "./actions";
export var userList = makeAsyncReducer($fetchUserList);
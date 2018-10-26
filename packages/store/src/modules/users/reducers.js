import { makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { $fetchUserList } from "./actions";

export const userList = makeAsyncReducer($fetchUserList);

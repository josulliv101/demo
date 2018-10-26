import { makeActionCreators } from "../../utils";

const { makeAction, makeAsyncAction } = makeActionCreators("users")();

export const $fetchUserList = makeAsyncAction("FETCH_USER_LIST");

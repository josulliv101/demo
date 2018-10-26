import { makeActionCreators } from "../../utils";

const { makeAction, makeAsyncAction } = makeActionCreators("posts")();

export const $fetchPostList = makeAsyncAction("FETCH_POST_LIST");

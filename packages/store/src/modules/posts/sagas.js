import { makeAsyncSaga } from "../../utils";
import * as API from "@demo/api";
import * as Actions from "./actions";

export default () => [
  makeAsyncSaga()(Actions.$fetchPostList, API.fetchPostList)
];

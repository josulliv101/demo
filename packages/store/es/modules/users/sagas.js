import { makeAsyncSaga } from "../../utils";
import * as API from "@demo/api";
import * as Actions from "./actions";
export default (function () {
  return [makeAsyncSaga()(Actions.$fetchUserList, API.fetchUserList)];
});
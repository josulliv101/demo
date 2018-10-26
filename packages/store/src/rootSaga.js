import { all, takeLatest } from "redux-saga/effects";
import userSagas from "./modules/users/sagas";
import postSagas from "./modules/posts/sagas";

export default function* sagas() {
  try {
    yield all([...userSagas(), ...postSagas()]);
  } catch (err) {}
}

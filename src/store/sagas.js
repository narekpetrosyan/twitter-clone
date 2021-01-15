import { all } from "redux-saga/effects";
import { tagsSaga } from "./tags/saga";
import { tweetDataSaga } from "./tweet/saga";
import { tweetsSaga } from "./tweets/saga";

export default function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), tweetDataSaga()]);
}

import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TWEETS } from "./types";
import { tweetsApi } from "./../../services/api/tweetsApi";
import { setTweetsLoadingState, setTweets } from "./actionCreators";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    console.log(error);
    yield put(setTweetsLoadingState(true));
  }
}

export function* tweetsSaga() {
  yield takeEvery(FETCH_TWEETS, fetchTweetsRequest);
}

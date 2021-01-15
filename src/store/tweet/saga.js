import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TWEET_DATA } from "./types";
import { tweetsApi } from "./../../services/api/tweetsApi";
import { setTweetDataLoadingState, setTweetData } from "./actionCreators";

export function* fetchTweetDataRequest({ payload: tweetId }) {
  try {
    const data = yield call(tweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    console.log(error);
    yield put(setTweetDataLoadingState(true));
  }
}

export function* tweetDataSaga() {
  yield takeEvery(FETCH_TWEET_DATA, fetchTweetDataRequest);
}

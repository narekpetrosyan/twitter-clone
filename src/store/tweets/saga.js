import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_ADD_TWEET, FETCH_TWEETS } from "./types";
import { tweetsApi } from "./../../services/api/tweetsApi";
import { setTweetsLoadingState, setTweets, addTweet } from "./actionCreators";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    console.log(error);
    yield put(setTweetsLoadingState(true));
  }
}

export function* addTweetRequest({ payload }) {
  try {
    const data = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullName: "test user",
        userName: "test user",
        avatarUrl:
          "https://images.unsplash.com/photo-1610642433569-fb4f62b3795f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
      },
    };
    const item = yield call(tweetsApi.addTweets, data);
    yield put(addTweet(item));
  } catch (error) {
    console.log(error);
    yield put(setTweetsLoadingState(true));
  }
}

export function* tweetsSaga() {
  yield takeEvery(FETCH_TWEETS, fetchTweetsRequest);
  yield takeEvery(FETCH_ADD_TWEET, addTweetRequest);
}

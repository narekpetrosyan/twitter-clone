import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TAGS } from "./types";
import { setTags, setTagsLoadingState } from "./actionCreators";
import { tagsApi } from "./../../services/api/tagsApi";

export function* fetchTagsRequest() {
  try {
    const items = yield call(tagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    console.log(error);
    yield put(setTagsLoadingState(true));
  }
}

export function* tagsSaga() {
  yield takeEvery(FETCH_TAGS, fetchTagsRequest);
}

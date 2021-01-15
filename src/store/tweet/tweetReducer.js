import produce from "immer";
import { SET_TWEET_DATA, FETCH_TWEET_DATA } from "./types";

const initialTweetState = {
  data: undefined,
  loadingState: false,
};

export const tweetReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TWEET_DATA:
      draft.data = payload;
      break;
    case FETCH_TWEET_DATA:
      draft.data = undefined;
      break;
    default:
      break;
  }
}, initialTweetState);

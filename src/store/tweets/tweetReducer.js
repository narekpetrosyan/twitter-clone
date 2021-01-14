import produce from "immer";
import { SET_LOADING_STATE, SET_TWEETS } from "./types";

const initialTweetsState = {
  items: [],
  loadingState: true,
};

export const tweetReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TWEETS:
      draft.items = payload;
      draft.loadingState = false;
      break;
    case SET_LOADING_STATE:
      draft.items = [];
      draft.loadingState = true;
      break;
    default:
      break;
  }
}, initialTweetsState);

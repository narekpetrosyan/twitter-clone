import produce from "immer";
import { ADD_TWEET, SET_LOADING_STATE, SET_TWEETS } from "./types";

const initialTweetsState = {
  items: [],
  loadingState: true,
};

export const tweetsReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TWEETS:
      draft.items = payload;
      draft.loadingState = false;
      break;
    case ADD_TWEET:
      draft.items.push(payload);
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

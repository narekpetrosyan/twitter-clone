import produce from "immer";
import { SET_LOADING_STATE, SET_TAGS } from "./types";

const initialTagsState = {
  items: [],
  loadingState: true,
};

export const tagReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TAGS:
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
}, initialTagsState);

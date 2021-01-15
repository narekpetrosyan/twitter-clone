import { FETCH_TAGS, SET_LOADING_STATE, SET_TAGS } from "./types";

export const setTags = (payload) => ({
  type: SET_TAGS,
  payload,
});

export const fetchTags = () => ({
  type: FETCH_TAGS,
});

export const setTagsLoadingState = (payload) => ({
  type: SET_LOADING_STATE,
  payload,
});

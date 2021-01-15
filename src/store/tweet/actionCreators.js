import { SET_LOADING_STATE, FETCH_TWEET_DATA, SET_TWEET_DATA } from "./types";

export const setTweetData = (payload) => ({
  type: SET_TWEET_DATA,
  payload,
});

export const fetchTweetData = (payload) => ({
  type: FETCH_TWEET_DATA,
  payload,
});

export const setTweetDataLoadingState = () => ({
  type: SET_LOADING_STATE,
});

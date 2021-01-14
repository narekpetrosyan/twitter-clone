import { FETCH_TWEETS, SET_TWEETS, SET_LOADING_STATE } from "./types";

export const setTweets = (payload) => ({
  type: SET_TWEETS,
  payload,
});

export const fetchTweets = () => ({
  type: FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload) => ({
  type: SET_LOADING_STATE,
  payload,
});

import {
  FETCH_TWEETS,
  SET_TWEETS,
  SET_LOADING_STATE,
  FETCH_ADD_TWEET,
  ADD_TWEET,
} from "./types";

export const setTweets = (payload) => ({
  type: SET_TWEETS,
  payload,
});

export const fetchAddTweet = (payload) => ({
  type: FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload) => ({
  type: ADD_TWEET,
  payload,
});

export const fetchTweets = () => ({
  type: FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload) => ({
  type: SET_LOADING_STATE,
  payload,
});

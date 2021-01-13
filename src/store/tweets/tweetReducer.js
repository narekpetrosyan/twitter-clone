import produce from "immer";

const initialTweetsState = {
  items: [],
  loading: false,
};

export const tweetReducer = produce((draft, action) => {}, initialTweetsState);

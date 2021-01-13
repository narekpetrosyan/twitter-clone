import { combineReducers } from "redux";
import { tweetReducer } from "./tweets/tweetReducer";

export const rootReducer = combineReducers({
  tweets: tweetReducer,
});

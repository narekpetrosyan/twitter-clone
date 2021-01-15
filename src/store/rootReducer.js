import { combineReducers } from "redux";
import { tagReducer } from "./tags/tagReducer";
import { tweetsReducer } from "./tweets/tweetsReducer";
import { tweetReducer } from "./tweet/tweetReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagReducer,
  tweet: tweetReducer,
});

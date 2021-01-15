import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweetData } from "../../store/tweet/actionCreators";
import { useParams } from "react-router-dom";
import { Tweet } from "../../components/Tweet/Index";
import { setTweetData } from "./../../store/tweet/actionCreators";

export const FullTweet = ({ classes }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const tweetData = useSelector((state) => state.tweet.data);

  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => dispatch(setTweetData(undefined));
  }, [dispatch]);

  if (!tweetData) {
    return null;
  }

  return (
    <div>
      <Tweet classes={classes} {...tweetData} />
    </div>
  );
};

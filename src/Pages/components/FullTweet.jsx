import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweetData } from "../../store/tweet/actionCreators";
import { useParams } from "react-router-dom";
import { setTweetData } from "./../../store/tweet/actionCreators";
import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";

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
      <Paper
        className={classNames(classes.tweet, classes.tweetsWrapperHeader)}
        variant="outlined"
      >
        <Avatar
          className={classes.tweetAvatar}
          alt={`Avatar alt ${tweetData.user.fullName}`}
          src={tweetData.user.avatarUrl}
        />

        <Typography style={{ display: "flex", flexDirection: "column" }}>
          <b>{tweetData.user.fullName}</b>
          <span className={classes.tweetUserName}>
            @{tweetData.user.userName}
          </span>
        </Typography>
        <Typography variant="body1" gutterBottom style={{ marginTop: 20 }}>
          {tweetData.text}
        </Typography>
        {/* <div className={classes.tweetFooter}>
          <div>
            <IconButton color="primary" aria-label="delete">
              <ChatBubbleOutlineIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span style={{ fontSize: 14 }}>1</span>
          </div>
          <div>
            <IconButton color="primary" aria-label="delete">
              <RepeatIcon
                style={{ fontSize: 20, transform: "rotate(90deg)" }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton style={{ color: "red" }} aria-label="delete">
              <FavoriteBorderIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton color="primary" aria-label="delete">
              <PresentToAllIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div> */}
      </Paper>
    </div>
  );
};

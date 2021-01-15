import React from "react";
import classNames from "classnames";
import { IconButton, Paper, Typography, Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import { Link } from "react-router-dom";

export const Tweet = React.memo(({ classes, _id, user, text }) => {
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweet, classes.tweetsWrapperHeader)}
        variant="outlined"
      >
        <Avatar
          className={classes.tweetAvatar}
          alt={`Avatar alt ${user.fullName}`}
          src={user.avatarUrl}
        />

        <Typography variant="">
          <b>{user.fullName}</b>
          <span className={classes.tweetUserName}>@{user.userName}</span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
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
        </div>
      </Paper>
    </Link>
  );
});

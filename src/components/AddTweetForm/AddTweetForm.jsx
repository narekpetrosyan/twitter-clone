import React from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import grey from "@material-ui/core/colors/grey";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { useDispatch } from "react-redux";
import { fetchAddTweet } from "../../store/tweets/actionCreators";

const useFormStyles = makeStyles((theme) => ({
  makeTweet: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    padding: "15px 10px",
  },
  tweetTextArea: {
    border: "none",
    outline: "none",
    width: "480px",
    padding: "10px 6px",
    marginLeft: "30px",
    fontSize: "18px",
    color: grey[500],
  },
  makeTweetTop: {
    display: "flex",
    flexWrap: "nowrap",
  },
  makeTweetTopAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  makeTweetBottom: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  makeTweetRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  makeTweetBottomButton: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  circular: {
    marginRight: "15px",
    marginTop: "15px",
  },
  tweetWrapper: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export const AddTweetForm = () => {
  const classes = useFormStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const handleClockAddTweet = () => {
    dispatch(fetchAddTweet(text));
    setText("");
  };

  return (
    <Paper className={classes.makeTweet}>
      <div className={classes.makeTweetTop}>
        <Avatar
          className={classes.makeTweetTopAvatar}
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <TextareaAutosize
          rowsMin={5}
          placeholder="Что происходит?"
          className={classes.tweetTextArea}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className={classes.makeTweetBottom}>
        <div className={classes.makeTweetLeft}>
          <IconButton color="primary">
            <CropOriginalIcon />
          </IconButton>
          <IconButton color="primary">
            <SentimentVerySatisfiedIcon />
          </IconButton>
        </div>
        <div className={classes.makeTweetRight}>
          <CircularProgress
            className={classes.circular}
            variant="determinate"
            value={text.length}
          />
          <Button
            className={classes.makeTweetBottomButton}
            variant="contained"
            color="primary"
            disabled={!text}
            onClick={() => handleClockAddTweet()}
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </Paper>
  );
};

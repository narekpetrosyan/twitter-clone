import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Avatar, IconButton, Paper, TextareaAutosize } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

export const DialogAddTweet = ({ handleClose, open, classes }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <IconButton color="primary" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
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
                <Button
                  className={classes.makeTweetBottomButton}
                  variant="contained"
                  color="primary"
                >
                  Твитнуть
                </Button>
              </div>
            </div>
          </Paper>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

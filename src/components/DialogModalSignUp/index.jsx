import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";

export const DialogModalSignUp = ({
  title,
  children,
  handleCloseSignUp,
  visiableSignUp,
}) => {
  return (
    <Dialog
      open={visiableSignUp}
      onClose={handleCloseSignUp}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={handleCloseSignUp} color="secondary">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

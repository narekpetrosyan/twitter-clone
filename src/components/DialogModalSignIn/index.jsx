import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";

export const DialogModalSignIn = ({
  title,
  children,
  handleClose,
  visiable,
}) => {
  return (
    <Dialog
      open={visiable}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={handleClose} color="secondary">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

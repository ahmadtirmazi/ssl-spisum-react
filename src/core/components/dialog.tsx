import React from "react";
import { connect } from "react-redux";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, Button } from "@material-ui/core";

interface dialogActions {
  label: string;
  onClick: any;
  color: "inherit" | "primary" | "secondary" | "default";
}

interface SimpleDialogProps {
  title?: string;
  content: string | React.ReactNode;
  open: boolean;
  onClose: (value: string) => void;
  actions: dialogActions[];
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { title, content, onClose, open, actions } = props;

  const handleClose = () => {
    onClose("");
  };

  const renderedActions = actions.map((prop, key) => {
    return (
      <Button onClick={prop.onClick} color={prop.color}>
        {prop.label}
      </Button>
    );
  });
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {title && title.length ? (
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      ) : (
        <></>
      )}

      {content}
      <DialogActions>{renderedActions}</DialogActions>
    </Dialog>
  );
};

export default connect(null, null)(SimpleDialog);

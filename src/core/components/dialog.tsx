import React from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, Button } from "@material-ui/core";

interface dialogActions {
  label: string;
  onClick: (event: React.MouseEvent) => void;
  color: "inherit" | "primary" | "secondary" | "default";
}

interface SimpleDialogProps {
  title?: string;
  content: string | React.ReactNode;
  open?: boolean;
  onClose: () => void;
  actions: dialogActions[];
}

const SimpleDialog = (props: SimpleDialogProps) => {
  const { title, content, onClose, open = false, actions } = props;

  const handleClose = () => {
    onClose();
  };

  const onActionButtonClick = (
    onClick: (event: React.MouseEvent) => void,
    e: React.MouseEvent
  ) => {
    // Close the dialog box on clicking any action button
    handleClose();
    onClick(e);
  };

  const renderedActions = actions.map((actionProps, key) => {
    return (
      <Button
        onClick={e => onActionButtonClick(actionProps.onClick, e)}
        color={actionProps.color}
        key={key}
      >
        {actionProps.label}
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

export default SimpleDialog;

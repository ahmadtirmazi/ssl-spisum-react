import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { CoreRoutes } from "core/routes";
import { selectIsLoggedIn } from "selectors";

import { SignedLayout } from "core/components/Layout/SignedLayout";
import SimpleDialog from "core/components/dialog";


const Component = () => {
  
  const isLoggedIn: Boolean = useSelector(selectIsLoggedIn);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const onDialogClose = () => {
    console.log("Dialog box closed");
    setIsDialogOpen(false);
  };

  return (
    <SignedLayout>
      {!isLoggedIn ? (
        <Redirect to={CoreRoutes.LOGIN} />
      ) : (
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Open simple dialog
          </Button>

          <SimpleDialog
            title="Dialog with ReactNode"
            isOpen={isDialogOpen}
            onClose={onDialogClose}
            content={
              <div style={{ textAlign: "center" }}>I am a ReactNode</div>
            }
            actions={[
              {
                color: "default",
                label: "Cancel",
                onClick: (e: React.MouseEvent) => {
                  console.log("Click cancel", e);
                }
              },
              {
                color: "primary",
                label: "OK",
                onClick: (e: React.MouseEvent) => {
                  console.log("Clicked OK", e);
                }
              }
            ]}
          />
        </div>
      )}
    </SignedLayout>
  );
};

export default Component;
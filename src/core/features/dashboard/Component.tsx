import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { CoreRoutes } from "core/routes";
import { SignedLayout } from "core/components/Layout/SignedLayout";
import SimpleDialog from "core/components/dialog";

import Button from "@material-ui/core/Button";

const Component = (props: any) => {
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
      {!props.isLoggedIn ? (
        <Redirect to={CoreRoutes.LOGIN} />
      ) : (
        <div>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}
          >
            Open simple dialog
          </Button>
          <SimpleDialog
            title="Dialog with ReactNode"
            isOpen={isDialogOpen}
            onClose={onDialogClose}
            content={<div style={{ textAlign: "center" }}>I am a ReactNode</div>}
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
                label: "Save Changes",
                onClick: (e: React.MouseEvent) => {
                  console.log("Clicked save", e);
                }
              }
            ]}
          />
        </div>
      )}
    </SignedLayout>
  );
};

function mapStateToProps(state: any) {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
}

export default connect(mapStateToProps, null)(Component);

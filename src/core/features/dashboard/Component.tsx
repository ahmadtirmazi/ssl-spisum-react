import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { CoreRoutes } from "core/routes";
import { SignedLayout } from "core/components/Layout/SignedLayout";
import SimpleDialog from "core/components/dialog";

import Button from "@material-ui/core/Button";

const Component = (props: any) => {
  const [isDialogOpen, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onDialogClose = () => {
    console.log("Dialog box closed");
    setOpen(false);
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
            title="My dialog box"
            content={<div style={{ textAlign: "center" }}>testcontent</div>}
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
            open={isDialogOpen}
            onClose={onDialogClose}
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

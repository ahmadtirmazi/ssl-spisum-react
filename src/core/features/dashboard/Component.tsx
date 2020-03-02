import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { CoreRoutes } from "core/routes";
import { SignedLayout } from "core/components/Layout/SignedLayout";
import SimpleDialog from "core/components/dialog";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Component = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <SignedLayout>
      {!props.isLoggedIn ? (
        <Redirect to={CoreRoutes.LOGIN} />
      ) : (
        <div>
          <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
          <br />
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open simple dialog
          </Button>
          <SimpleDialog
            title="My dialog box"
            content={<div style={{textAlign:"center"}}>testcontent</div>}

            actions={[
              {
               color: "primary",
               label: "Save Changes",
               onClick: (e:any) => {console.log(e); }
              }
            ]}
            open={open}
            onClose={handleClose}

            
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

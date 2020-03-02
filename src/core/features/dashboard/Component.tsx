import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { CoreRoutes } from "core/routes";
import { SignedLayout } from "core/components/Layout/SignedLayout";

const Component = (props: any) => {
  return (
    <SignedLayout>
      {!props.isLoggedIn ? (
        <Redirect to={CoreRoutes.LOGIN} />
      ) : (
        <div>signed</div>
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

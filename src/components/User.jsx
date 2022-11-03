import React, { useEffect } from "react";

import { connect } from "react-redux";

const User = (props) => {
  console.log(props);

  return (
    <>
      {props.user ? <h1>{props.user.name}</h1> : <div>loading .........</div>}
    </>
  );
};

const mapPropsToState = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapPropsToState)(User);

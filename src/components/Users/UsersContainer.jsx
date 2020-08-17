import React from "react";
import Users from "./Users";
import { followAC, setUsersAc, unFollowAC } from "../../redux/users-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

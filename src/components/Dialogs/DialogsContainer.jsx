import React from "react";
import {
  sendMessageActionCreator,
  updateChangeMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    newPostMessage: state.dialogsPage.newPostMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateChangeMessage(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

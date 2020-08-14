import React from "react";
import {
  sendMessageActionCreator,
  updateChangeMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  const updateMessage = (text) => {
    props.store.dispatch(updateChangeMessage(text));
  };
  return (
    <Dialogs
      updateMessage={updateMessage}
      dialogsData={state.dialogsPage.dialogsData}
      messageData={state.dialogsPage.messageData}
      sendMessage={sendMessage}
      newPostText={state.dialogsPage.newPostMessage}
    />
  );
};
export default DialogsContainer;

import React from "react";
import {
  sendMessageActionCreator,
  updateChangeMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        const updateMessage = (text) => {
          store.dispatch(updateChangeMessage(text));
        };
        return (
          <Dialogs
            updateMessage={updateMessage}
            dialogsData={state.dialogsPage.dialogsData}
            messageData={state.dialogsPage.messageData}
            sendMessage={sendMessage}
            newPostMessage={state.dialogsPage.newPostMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;

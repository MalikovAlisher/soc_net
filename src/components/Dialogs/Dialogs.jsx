import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateChangeMessage,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let newMessage = props.state.messageData.map((el) => (
    <Message message={el.message} />
  ));
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  const updateMessage = (e) => {
    let text = e.target.value;
    props.dispatch(updateChangeMessage(text));
  };
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>{dialogsElement}</div>
      <div className={cl.textMessage}>
        <div className={cl.messages}>{newMessage}</div>
        <div className={cl.dialogsTextArea}>
          <textarea
            value={props.state.newPostMessage}
            onChange={updateMessage}
            cols="30"
            rows="5"
          />
          <button className={cl.btnSend} onClick={sendMessage}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

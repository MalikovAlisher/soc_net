import React from "react";
import cl from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  return <div className={cl.messageItem}>{props.message}</div>;
};

export default Message;

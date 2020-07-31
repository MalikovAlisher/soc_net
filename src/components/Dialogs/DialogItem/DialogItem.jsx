import React from "react";
import cl from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      className={cl.item}
      activeClassName={cl.active}
    >
      <span title={props.name}> {props.name}</span>
    </NavLink>
  );
};

export default DialogItem;

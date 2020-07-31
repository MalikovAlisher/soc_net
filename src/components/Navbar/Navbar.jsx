import React from "react";
import cl from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={cl.navMenu}>
      <div className={cl.item}>
        <NavLink to="/profile" activeClassName={cl.active}>
          Profile
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/dialogs" activeClassName={cl.active}>
          dialogs
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/news" activeClassName={cl.active}>
          News
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/music" activeClassName={cl.active}>
          Music!
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink to="/settings" activeClassName={cl.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

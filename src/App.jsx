import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbars from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/*  Header*/}
        <Header />

        {/*navbar && main*/}
        <section className="intro">
          {/*  navbar*/}
          <Navbars />
          {/*main content, pages*/}
          <div className="main">
            <Route
              path="/profile"
              render={() => <Profile store={props.store} />}
            />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={props.store} />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;

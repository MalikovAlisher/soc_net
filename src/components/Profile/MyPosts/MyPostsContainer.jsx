import React from "react";

import {
  addPostActionCreator,
  updateChangePost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateText = (text) => {
          store.dispatch(updateChangePost(text));
        };
        return (
          <MyPosts
            updateNewPostText={updateText}
            addPost={addPost}
            myPosts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

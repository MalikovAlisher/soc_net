import React from "react";

import {
  addPostActionCreator,
  updateChangePost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const updateText = (text) => {
    props.store.dispatch(updateChangePost(text));
  };
  return (
    <MyPosts
      updateNewPostText={updateText}
      addPost={addPost}
      myPosts={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

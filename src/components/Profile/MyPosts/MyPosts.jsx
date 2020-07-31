import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateChangePost,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let posts = props.myPosts.map((el) => {
    return <Post message={el.message} likesCount={el.likeCount} />;
  });
  let textArea = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const updateText = () => {
    let text = textArea.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={cl.myPostsWrap}>
      <div className={cl.myPosts}>
        <h2>My Posts</h2>

        <textarea
          onChange={updateText}
          ref={textArea}
          cols="30"
          rows="5"
          value={props.newPostText}
        />
        <button type="button" onClick={addPost}>
          Add post
        </button>
      </div>
      <div className={cl.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;

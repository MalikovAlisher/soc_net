import React from "react";
import cl from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cl.post}>
      <img
        src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1"
        alt=""
      />
      <p>{props.message}</p>
      <span>{props.likesCount}</span>
    </div>
  );
};

export default Post;

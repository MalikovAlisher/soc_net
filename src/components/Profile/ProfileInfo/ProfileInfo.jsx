import React from "react";
import cl from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={cl.bgImage}>
        <img
          src="https://cdn.pixabay.com/photo/2020/05/26/09/01/night-5222267_960_720.jpg"
          alt=""
        />
      </div>
      <div className={cl.profileAva}>ava + dick ava + dick</div>
    </div>
  );
};

export default ProfileInfo;

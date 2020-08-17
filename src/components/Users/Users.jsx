import React from "react";
import cl from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Max",
        status: "i am frontend developer",
        location: { city: "Tashkent", country: "Uzbekistan" },
        photoUrl:
          "https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg",
      },
      {
        id: 2,
        followed: true,
        fullName: "Nicky",
        status: "i love angular",
        location: { city: "Moscow", country: "Russia" },
        photoUrl:
          "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: 3,
        followed: false,
        fullName: "Bogdan",
        status: "i am big boss in COD Mob",
        location: { city: "Tashkent", country: "Uzbekistan" },
        photoUrl:
          "https://i.pinimg.com/236x/30/a5/96/30a596e031c74aaa3e7c15f737368e07.jpg",
      },
    ]);
  }

  return (
    <div className={cl.UsersItem}>
      {props.users.map((u) => (
        <div className={cl.item} key={u.id}>
          <div className={cl.photobtn}>
            <div className={cl.itemPhoto}>
              <img src={u.photoUrl} alt="" />
            </div>
            <div className={cl.btn}>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={cl.info}>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div className={cl.location}>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

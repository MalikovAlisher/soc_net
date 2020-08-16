const ADD_POST = "ADD-POST";
const UPDATE_CHANGE_POST = "UPDATE-CHANGE-POST";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you", likeCount: 12 },
    { id: 2, message: "it's my first post", likeCount: 1 },
    {
      id: 3,
      message:
        "today is beautiful day for coding lorem10today is beautiful day for coding lorem10today is beautiful day for coding lorem10today" +
        " is beautiful day for coding lorem10today is beautiful day for coding lorem10",
      likeCount: 100,
    },
    {
      id: 4,
      message: "this is post posting from index.js",
      likeCount: 1500,
    },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: state.newPostText,
        likeCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";

      return stateCopy;
    }
    case UPDATE_CHANGE_POST:
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateChangePost = (text) => {
  return { type: UPDATE_CHANGE_POST, newText: text };
};

export default profileReducer;

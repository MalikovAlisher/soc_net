const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
  messageData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello, how are u?" },
    { id: 3, message: "Thanks no bad and you?" },
    { id: 4, message: "everything is ok!" },
    { id: 5, message: "Yo!" },
    { id: 6, message: "lolololol" },
  ],
  dialogsData: [
    { id: 1, name: "Timmy" },
    { id: 2, name: "Don Gathy" },
    { id: 3, name: "Tim Shurmy" },
    { id: 4, name: "Dr. Andy Shumatumagumbsssy" },
    { id: 5, name: "Allison" },
    { id: 6, name: "Mommy" },
    { id: 7, name: "Bro" },
  ],
  newPostMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messages = {
        id: 7,
        message: state.newPostMessage,
      };

      state.messageData.push(messages);
      state.newPostMessage = "";
      return state;
    case UPDATE_MESSAGE:
      state.newPostMessage = action.newMessage;
      return state;
    default:
      return state;
  }
};
export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateChangeMessage = (text) => {
  return { type: UPDATE_MESSAGE, newMessage: text };
};
export default dialogsReducer;

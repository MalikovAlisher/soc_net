// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//   _state: {
//     profilePage: {
//       postData: [
//         { id: 1, message: "Hi, how are you", likeCount: 12 },
//         { id: 2, message: "it's my first post", likeCount: 1 },
//         {
//           id: 3,
//           message:
//             "today is beautiful day for coding lorem10today is beautiful day for coding lorem10today is beautiful day for coding lorem10today" +
//             " is beautiful day for coding lorem10today is beautiful day for coding lorem10",
//           likeCount: 100,
//         },
//         {
//           id: 4,
//           message: "this is post posting from index.js",
//           likeCount: 1500,
//         },
//         {
//           id: 5,
//           message: "this is post posting from stsate.js",
//           likeCount: 1500,
//         },
//         { id: 6, message: "today lesson is so hard", likeCount: 12000 },
//       ],
//       newPostText: "",
//     },
//     dialogsPage: {
//       messageData: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "Hello, how are u?" },
//         { id: 3, message: "Thanks no bad and you?" },
//         { id: 4, message: "everything is ok!" },
//         { id: 5, message: "Yo!" },
//         { id: 6, message: "lolololol" },
//       ],
//       dialogsData: [
//         { id: 1, name: "Timmy" },
//         { id: 2, name: "Don Gathy" },
//         { id: 3, name: "Tim Shurmy" },
//         { id: 4, name: "Dr. Andy Shumatumagumbsssy" },
//         { id: 5, name: "Allison" },
//         { id: 6, name: "Mommy" },
//         { id: 7, name: "Bro" },
//       ],
//       newPostMessage: "",
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._rerenderTree = observer;
//   },
//   _rerenderTree() {
//     console.log("State stage");
//   },
//
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._rerenderTree(this._state);
//   },
// };
//
// export default store;
// window.store = store;

const initState = {
  users: [
    { id: 1, name: "Hoa" },
    { id: 2, name: "Hoant" },
  ],
  post: {},
};
const rootReducer = (state = initState, action) => {
  //state là nơi lưu trữ data của redux
  switch (action.type) {
    case "DELETE_USER":
      //   console.log("hahah: ", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random - ${id}` };

      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
  //   return state;
};
export default rootReducer;

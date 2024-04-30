import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../slicers/todosSlicer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;

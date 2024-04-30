import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  cantidadDeTodos: 0,
};
const todoSlice = createSlice({
  initialState,
  name: "todos",
  reducers: {
    agregarTodo: (state, { payload }) => {
      console.log(payload);
      const newTodo = payload;
      state.todoList = [...state.todoList, newTodo];
    },
    borrarTodo: (state, payload) => {},
  },
});

export const todosReducer = todoSlice.reducer;

export default todoSlice.actions;
//Asi luce cada slice dentro del store
// store = {
//   todos: {
//     todos: [],
//     cantidadDeTodos: 0,
//   },
//   wishListStore: {
//     listaDeDeseados: [],
//     cantidadDeseados: [],
//   },
//   carritoCompras: {
//     listaDeProductos: [],
//     valorDeLaCompra: 0,
//   },
//   userInformation: {
//     name: "",
//     apellido: "",
//   },
// };

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  segundos: 0,
};

//Una parte del store
const temporizadorSlice = createSlice({
  name: "temporizador",
  initialState,
  reducers: {
    //Reducer: (state, action) => {
    //   if(action.type =="incrementar") {
    //     state.segundos
    //   }
    //   else{

    //   }
    // }
    incrementar: (state) => {
      state.segundos += 1;
    },
    decrementar: (state) => {
      state.segundos -= 1;
    },
    reset: (state) => {
      state.segundos = 0;
    },
  },
});

export default temporizadorSlice;

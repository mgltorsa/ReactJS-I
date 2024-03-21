import { createSlice } from "@reduxjs/toolkit";

const initialStateHola = {
  saludo: "Hola",
};

const holaSlice = createSlice({
  name: "holaSLice",
  initialStateHola,
  reducers: {
    saludar: (state) => {
      state.saludo = `${state.saludo} Hola!`;
    },
  },
});

export default holaSlice;

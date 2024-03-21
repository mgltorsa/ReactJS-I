import { combineReducers, configureStore } from "@reduxjs/toolkit";
import temporizadorReducer from "../slices/temporizador/reducer";
import holaReducer from "../slices/hola/reducer";

const store = configureStore({
  reducer: {
    temporizador: temporizadorReducer,
    holaReducer: holaReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "../slicers/carrito";

const store = configureStore({
    reducer:{
        carrito: carritoReducer
    }
});

export default store;

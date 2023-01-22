import { configureStore } from "@reduxjs/toolkit";
import movementSlice from "./movementSlice";
const store = configureStore({
  reducer: {
    movements: movementSlice,
  },
});
export default store;

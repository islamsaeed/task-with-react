import { createSlice } from "@reduxjs/toolkit";

const initState = [

];

const movementSlice = createSlice({
  name: "movementReducer",
  initialState: initState,
  reducers: {
    addTMovement: (state, action) => {
      const newMovement = {
        id: Date.now(),
        movementResult: action.payload.movementResult,
      };
      // state.push(newMovement);
      return [...state, newMovement];
    },
    deleteMovement: (state, action) => {
      return state.filter((move) => move.id !== action.payload.id);

    },
  },
});

export const { addTMovement, deleteMovement } = movementSlice.actions;
export default movementSlice.reducer;

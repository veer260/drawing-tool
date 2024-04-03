import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pencil: {
    size: 0,
    color: "black",
  },
  eraser: {
    size: 5,
  },
};

const configSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    colorChange: (state, action) => {
      state.pencil.color = action.payload;
    },
    sizeChange: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { colorChange, sizeChange } = configSlice.actions;

export default configSlice.reducer;

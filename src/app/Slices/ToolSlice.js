"use client";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  activeToolItem: "pencil",
  actionToolItem: null,
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    toolItemClick: (state, action) => {
      state.activeToolItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionToolItem = action.payload;
    },
  },
});

export const { toolItemClick, actionItemClick } = toolsSlice.actions;

export default toolsSlice.reducer;

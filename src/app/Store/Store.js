"use client";
const { configureStore } = require("@reduxjs/toolkit");
import toolSliceReducer from "@/app/Slices/ToolSlice";
import ConfigSliceReducer from "../Slices/ConfigSlice";
const store = configureStore({
  reducer: {
    tool: toolSliceReducer,
    config: ConfigSliceReducer,
  },
});

export default store;

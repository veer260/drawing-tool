"use client";
import React from "react";
import Range from "./Range";
import { useDispatch, useSelector } from "react-redux";
import { sizeChange } from "../Slices/ConfigSlice";

const BrushSize = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.tool.activeToolItem);
  const brushSize = useSelector((state) => state.config[item].size);

  const handleChange = (newSize) => {
    dispatch(sizeChange({ item, size: newSize }));
  };

  return (
    <form action="">
      <Range
        max={10}
        min={0}
        id="brush"
        step={1}
        value={brushSize}
        handleChange={handleChange}
      />
    </form>
  );
};

export default BrushSize;

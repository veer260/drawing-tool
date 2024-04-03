"use client";
import React from "react";
import { COLORS } from "../Constants/Colors";
import ColorInput from "./ColorInput";
import BrushSize from "./BrushSize";
import { useDispatch, useSelector } from "react-redux";
import { colorChange } from "../Slices/ConfigSlice";

const COLORNAMES = ["black", "red", "green", "blue", "orange", "yellow"];

const Conf = () => {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.config.pencil.color);

  const handleChange = (color) => {
    dispatch(colorChange(color));
  };
  return (
    <div className="px-12 py-8 shadow-md border-2 rounded-md absolute top-[200px] left-[40px]">
      <fieldset className="mb-8">
        <legend>Stroke</legend>

        {COLORNAMES.map((name, index) => {
          return (
            <ColorInput
              type="radio"
              key={name}
              id={name}
              color={color}
              value={name}
              checked={name == color}
              name="color-radio"
              handleChange={handleChange}
            />
          );
        })}
      </fieldset>

      <fieldset>
        <legend>Brush Size</legend>
        <BrushSize />
      </fieldset>
    </div>
  );
};

export default Conf;

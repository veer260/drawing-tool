import React from "react";
import { COLORS } from "../Constants/Colors";

const ColorInput = ({ id, value, color, handleChange, ...delegated }) => {
  return (
    <>
      <input
        className="sr-only "
        value={value}
        id={id}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        {...delegated}
      />{" "}
      <label
        className={
          `${color == value ? "active" : ""}` +
          ` ${value} inline-block mr-2 w-4 h-4 cursor-pointer`
        }
        htmlFor={id}
      ></label>
    </>
  );
};

export default ColorInput;

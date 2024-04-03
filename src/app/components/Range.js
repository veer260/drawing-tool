import React from "react";

const Range = ({ id, value, handleChange, ...delegated }) => {
  return (
    <>
      <input
        type="range"
        id={id}
        value={value}
        {...delegated}
        onChange={(e) => handleChange(e.target.value)}
      />

      <label htmlFor={id}>{value}</label>
    </>
  );
};

export default Range;

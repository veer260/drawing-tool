"use client";
import React from "react";

const Counter = ({ count, handleChange }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleChange}>Decrease</button>
    </div>
  );
};

export default Counter;

"use client";

import React from "react";
import { useSelector } from "react-redux";

const Tool = ({ icon: Icon, onClick, thisItem }) => {
  const toolItem = useSelector((state) => state.tool.activeToolItem);
  // console.log({ toolItem, thisItem });
  return (
    <li
      onClick={onClick}
      className={`${
        thisItem == toolItem ? "activeItem " : ""
      } p-2 rounded-sm tool-button`}
    >
      <button
        // onClick={(e) => dispatch(toolItemClick("eraser"))}
        className={`  grid place-content-center`}
      >
        {" "}
        {Icon}{" "}
      </button>
    </li>
  );
};

export default Tool;

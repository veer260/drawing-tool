"use client";
import React from "react";
import { Edit2, RotateCcw, RotateCw, Download } from "react-feather";
import Tool from "./Tool";
import Image from "next/image";
import eraser from "./../../../public/icons8-eraser-50.png";
import { useDispatch } from "react-redux";
import { toolItemClick } from "../Slices/ToolSlice";

const Toolbox = ({ undoIt, redoIt }) => {
  const dispatch = useDispatch();

  return (
    <ul className="flex items-center py-[4px] px-8 justify-between block ml-auto mr-auto border-2 border-gray-300 shadow-md rounded-md mt-6 mb-12">
      <Tool
        thisItem="pencil"
        onClick={(e) => dispatch(toolItemClick("pencil"))}
        icon={<Edit2 size={20} strokeWidth={1} />}
      />
      <Tool
        thisItem="eraser"
        onClick={(e) => dispatch(toolItemClick("eraser"))}
        icon={
          <Image
            className="block"
            width={20}
            height={20}
            src={eraser}
            alt="eraser-logo "
          />
        }
      />
      <Tool
        onClick={() => {
          undoIt();
        }}
        icon={<RotateCcw size={20} strokeWidth={1} />}
      />
      <Tool
        onClick={() => redoIt()}
        icon={<RotateCw size={20} strokeWidth={1} />}
      />
      <Tool icon={<Download size={20} strokeWidth={1} />} />
    </ul>
  );
};

export default Toolbox;

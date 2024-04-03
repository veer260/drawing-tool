"use client";
// import React from "react";
import React from "react";
import Canvas from "./components/Canvas";
import Toolbox from "@/app/components/Toolbox";
import Conf from "./components/Conf";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Counter from "./components/Counter";

export default function Home() {
  const [history, setHistory] = React.useState([]);
  const [index, setIndex] = React.useState(-1);

  const addToHistory = (latest) => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, latest];
      return newHistory;
    });
  };

  const toEnd = (num) => {
    setIndex(num);
  };

  const undoIt = () => {
    setIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const redoIt = () => {
    setIndex((prev) =>
      prev + 1 > history.length - 1 ? history.length - 1 : prev + 1
    );
  };
  return (
    <div className="grid py-4 place-content-center">
      <Provider store={store}>
        <Toolbox redoIt={redoIt} addToHistory={addToHistory} undoIt={undoIt} />
        <Canvas
          history={history}
          index={index}
          height={500}
          width={500}
          addToHistory={addToHistory}
          toEnd={toEnd}
        />
        <Conf />
      </Provider>
    </div>
  );
}

"use client";
import React from "react";
import { useSelector } from "react-redux";

const Canvas = ({ height, width, toEnd, addToHistory, index, history }) => {
  const item = useSelector((state) => state.tool.activeToolItem);
  let color = useSelector((state) => state.config.pencil.color);
  const pencilSize = useSelector((state) => state.config.pencil.size);
  const eraserSize = useSelector((state) => state.config.eraser.size);
  if (item == "eraser") {
    color = "white";
  }

  const canDraw = React.useRef(false);
  const prevPointRef = React.useRef({
    x: 0,
    y: 0,
  });
  const canvasRef = React.useRef(null);

  const draw = React.useCallback(
    ({ ctx, point, prevPointRef }) => {
      ctx.lineWidth = item == "pencil" ? pencilSize : eraserSize * 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(prevPointRef.current.x, prevPointRef.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.strokeStyle = color;

      ctx.stroke();

      ctx.beginPath();
      ctx.arc(point.x, point.y, pencilSize / 2, 0, 2 * Math.PI);
      ctx.fill();
    },
    [color, pencilSize, item]
  );

  React.useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");
    if (index >= 0) {
      ctx.putImageData(history[index], 0, 0);
    }
  }, [index]);

  React.useEffect(() => {
    const handleMove = (e) => {
      if (canDraw.current) {
        point.x = e.clientX - canvasRef.current.getBoundingClientRect().left;
        //   point.x = e.clientX;
        point.y = e.clientY - canvasRef.current.getBoundingClientRect().top;
        draw({ ctx, point, prevPointRef });
      }
      prevPointRef.current.x = point.x;
      prevPointRef.current.y = point.y;
    };
    let point = {
      x: 0,
      y: 0,
    };

    let ctx = canvasRef.current.getContext("2d");

    canvasRef.current.addEventListener("mousemove", handleMove);

    return () => {
      canvasRef.current?.removeEventListener("mousemove", handleMove);
    };
  }, [color, pencilSize]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      canDraw.current = true;
      prevPointRef.current.x =
        e.clientX - canvasRef.current.getBoundingClientRect().left;
      prevPointRef.current.y =
        e.clientY - canvasRef.current.getBoundingClientRect().top;
    };

    canvasRef.current.addEventListener("mousedown", handleKeyDown);
    return () => {
      canvasRef.current?.removeEventListener("mousedown", handleKeyDown);
    };
  }, []);

  //effect when mouse is just made to lose contact with canvas

  React.useEffect(() => {
    const handleMouseUp = () => {
      if (canDraw.current == true) {
        let ctx = canvasRef.current.getContext("2d");

        const canvasData = ctx.getImageData(0, 0, height, width);
        addToHistory(canvasData);

        toEnd(history.length);
      }
      canDraw.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [history]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      className="border-2 border-black rounded "
    ></canvas>
  );
};

export default Canvas;

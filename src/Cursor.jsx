import { useState, useEffect } from "react";

function Cursor() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const offset = { x: 10, y: -10 }; // Offset from the cursor

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDotPosition({
        x: event.clientX + offset.x,
        y: event.clientY + offset.y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-2.5 h-2.5 bg-red-500 rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
    />
  );
}

export default Cursor;

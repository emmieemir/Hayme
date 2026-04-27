"use client";

import { useEffect, useState } from "react";

export default function Cursor() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      top-0
      left-0
      w-72
      h-72
      rounded-full
      bg-indigo-500/10
      blur-3xl
      z-40
      transition
      duration-300
      "
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`
      }}
    />
  );
}
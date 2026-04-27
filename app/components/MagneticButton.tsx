"use client";

import { useRef } from "react";

export default function MagneticButton({ children }: any) {

  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {

    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if(ref.current){
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        px-8
        py-4
        rounded-full
        bg-black
        text-white
        transition-transform
        duration-200
      "
    >
      {children}
    </button>
  );
}
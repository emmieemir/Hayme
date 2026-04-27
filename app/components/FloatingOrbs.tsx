"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {

  const orbs = [
    { size: 220, x: "-10%", y: "20%" },
    { size: 160, x: "80%", y: "10%" },
    { size: 140, x: "30%", y: "75%" },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          className="
            absolute
            rounded-full
            bg-black/5
            blur-3xl
          "
        />
      ))}

    </div>
  );
}
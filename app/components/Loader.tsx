"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ children }: any) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return (
      <div
        className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          bg-[#FAFAFA]
        "
      >

        {/* CENTER BOX */}
        <div className="flex flex-col items-center gap-6">

          {/* Animated Circle */}
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="
              w-12
              h-12
              border-4
              border-black
              border-t-transparent
              rounded-full
            "
          /> */}

          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-xl
              md:text-3xl
              font-bold
              tracking-widest
              text-center
              px-6
            "
          >
            Welcome To Emama's Portfolio
          </motion.h1>

        </div>

      </div>
    );
  }

  return children;
}
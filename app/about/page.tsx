"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const fullText1 =
    "I'm a MERN stack developer who loves transforming ideas into powerful digital experiences. My focus is on building scalable, high-performance applications with clean and modern design.";

  const fullText2 =
    "I enjoy solving real-world problems, continuously learning new technologies, and pushing my limits to grow as a developer.";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    let i = 0;

    const timer1 = setInterval(() => {
      setText1(fullText1.slice(0, i));
      i++;

      if (i > fullText1.length) {
        clearInterval(timer1);

        let j = 0;

        const timer2 = setInterval(() => {
          setText2(fullText2.slice(0, j));
          j++;

          if (j > fullText2.length) {
            clearInterval(timer2);
          }
        }, 20);
      }
    }, 20);

    return () => clearInterval(timer1);
  }, []);

  return (
    <main className="bg-[#FAFAFA] text-[#111827] min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="section-heading">
          About Me
        </h1>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden">

              <Image
                src="/images/idea.JPG"
                alt="Emama"
                fill
                className="object-cover"
                priority
              />

            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Creativity is My Passion
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 min-h-[120px]">
              {text1}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-gray-600 leading-relaxed min-h-[90px]">
              {text2}
            </p>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-gray-200 ml-4">

          {/* ITEM */}
          <div className="mb-14 ml-6">
            <div className="absolute w-4 h-4 bg-black rounded-full -left-2"></div>

            <h3 className="text-xl font-semibold">
              Matriculation
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              2018 – 2020
            </p>

            <p className="text-gray-600">
              Completed secondary education with a focus on science subjects and foundational computer knowledge.
            </p>
          </div>

          {/* ITEM */}
          <div className="mb-14 ml-6">
            <div className="absolute w-4 h-4 bg-black rounded-full -left-2"></div>

            <h3 className="text-xl font-semibold">
              Intermediate (CS / Relevant Field)
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              2022 – 2024
            </p>

            <p className="text-gray-600">
              Studied core subjects such as Mathematics, Physics, and Computer fundamentals, developing analytical and problem-solving skills. (Continued alongside professional diploma studies)
            </p>
          </div>

          {/* ITEM */}
          <div className="mb-14 ml-6">
            <div className="absolute w-4 h-4 bg-black rounded-full -left-2"></div>

            <h3 className="text-xl font-semibold">
              Aptech Diploma (Software Engineering / Full Stack Development)
            </h3>

            <p className="text-gray-500 text-sm mb-2">
              2022 – 2025
            </p>

            <p className="text-gray-600">
              Completed a comprehensive diploma focusing on practical software development, including MERN stack (MongoDB, Express.js, React, Node.js), backend systems, and real-world application development.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
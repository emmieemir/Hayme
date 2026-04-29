"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./components/MagneticButton";
import FloatingOrbs from "./components/FloatingOrbs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] text-[#111827]">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pb-32">

        {/* MOBILE PROFILE IMAGE (TOP LEFT) */}
        <div className="absolute top-6 left-6 z-40 md:hidden">
          <div className="relative w-[70px] h-[70px]">

            <div className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-tr
              from-indigo-400
              via-purple-400
              to-pink-400
              blur-2xl
              opacity-30
              scale-110
            " />

            <Image
              src="/images/home.JPG"
              alt="Emama"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* RESUME BUTTON - MOBILE TOP RIGHT */}
        <a
          href="/EmamaSaleem.pdf"
          download
          className="
            md:hidden
            absolute
            top-9
            right-6
            z-50
            group
            overflow-hidden
            px-4
            py-2
            text-sm
            rounded-full
            border
            border-black
            font-medium
            bg-white
            shadow-md
          "
        >
          <span className="
            absolute
            inset-0
            bg-black
            scale-x-0
            origin-left
            transition-transform
            duration-300
            group-hover:scale-x-100
          "></span>

          <span className="relative z-10 text-black group-hover:text-white transition">
            Resume
          </span>
        </a>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="pt-22 md:pt-0 text-center md:text-left">

            <p className="text-gray-500 mb-4 text-lg">
              Hello, I'm
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Emama —
              <br />
              MERN Stack Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-600 mb-8 max-w-lg text-lg mx-auto md:mx-0"
            >
              I design and build high-performance web experiences that feel fast,
              modern, and intuitive.

              <span className="block mt-3 font-semibold text-black">
                Focused on creating products — not just projects.
              </span>
            </motion.p>

            <p className="text-sm tracking-widest text-gray-400 mb-4">
              FULL STACK DEVELOPER • PROBLEM SOLVER • PRODUCT THINKER
            </p>

            <div className="
              inline-block
              mb-6
              px-4
              py-1
              bg-green-100
              text-green-700
              rounded-full
              text-sm
              font-medium
            ">
              ● Available for Opportunities
            </div>

            <p className="text-gray-500 mt-2">
              Open to Full-Time • Freelance • Remote
            </p>

            <p className="text-gray-400 mb-6">
              Based in Pakistan • Open Worldwide
            </p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <MagneticButton>
                View Projects
              </MagneticButton>
            </motion.div>

          </div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <div className="hidden md:flex flex-col items-center gap-8">

            <div className="relative w-[340px] h-[340px]">

              <div className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-tr
                from-indigo-400
                via-purple-400
                to-pink-400
                blur-3xl
                opacity-30
                scale-110
              " />

              <Image
                src="/images/home.JPG"
                alt="Emama"
                fill
                className="object-cover rounded-full relative"
                priority
              />
            </div>

            {/* DESKTOP RESUME BUTTON */}
            <a
              href="/EmamaSaleem.pdf"
              download
              className="
                relative
                overflow-hidden
                px-8
                py-3
                rounded-full
                border
                border-black
                font-medium
                group
              "
            >
              <span className="
                absolute
                inset-0
                bg-black
                scale-x-0
                origin-left
                transition-transform
                duration-300
                group-hover:scale-x-100
              "></span>

              <span className="relative z-10 text-black group-hover:text-white transition">
                Download Resume
              </span>
            </a>

          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Tech Stack
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl">
            Technologies I use to design and build fast, scalable,
            and high-performance applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "Tailwind",
              "Git",
              "REST APIs",
              "Firebase",
              "Postman"
            ].map((tech) => (
              <div
                key={tech}
                className="
                  border border-gray-200 rounded-xl px-6 py-4
                  text-center font-medium hover:border-black
                  hover:-translate-y-1 transition duration-300 bg-[#FAFAFA]
                "
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            I'm open to freelance opportunities, collaborations,
            and full-time roles.
          </p>

          <Link href="/contact">
            <button className="
              relative px-6 py-3 border-2 border-black
              rounded-full overflow-hidden group
            ">
              <span className="
                absolute inset-0 bg-black
                translate-x-[-100%]
                group-hover:translate-x-0
                transition duration-500
              "></span>

              <span className="relative z-10 group-hover:text-white transition">
                Contact Me
              </span>
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}
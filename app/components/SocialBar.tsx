"use client";

import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div
        className="
        fixed 
        left-8 
        top-1/2 
        -translate-y-1/2 
        hidden md:flex 
        flex-col 
        items-center 
        gap-6 
        z-50
        group
      "
      >
        {/* TOP LINE */}
        <div
          className="
          w-[2px]
          h-24
          bg-gray-300
          origin-bottom
          scale-y-100
          group-hover:scale-y-150
          transition-transform
          duration-500
        "
        ></div>

        {/* ICONS */}
        <a href="#" target="_blank">
          <FaWhatsapp className="text-2xl text-gray-600 hover:text-black hover:-translate-y-1 transition duration-300 cursor-pointer" />
        </a>

        <a href="#" target="_blank">
          <FaLinkedin className="text-2xl text-gray-600 hover:text-black hover:-translate-y-1 transition duration-300 cursor-pointer" />
        </a>

        <a href="#" target="_blank">
          <FaInstagram className="text-2xl text-gray-600 hover:text-black hover:-translate-y-1 transition duration-300 cursor-pointer" />
        </a>

        <a href="#" target="_blank">
          <FaTwitter className="text-2xl text-gray-600 hover:text-black hover:-translate-y-1 transition duration-300 cursor-pointer" />
        </a>

        {/* BOTTOM LINE */}
        <div
          className="
          w-[2px]
          h-24
          bg-gray-300
          origin-top
          scale-y-100
          group-hover:scale-y-150
          transition-transform
          duration-500
        "
        ></div>
      </div>

{/* MOBILE TOP CENTER BAR */}
<div
  className="
    fixed
    top-10
    left-1/2
    -translate-x-1/2
    flex md:hidden
    items-center
    gap-4
    px-4
    py-2
    bg-white/70
    backdrop-blur-lg
    border
    border-gray-200
    rounded-full
    shadow-md
    z-50
  "
>
  <a href="#" target="_blank">
    <FaWhatsapp className="text-base text-gray-600 hover:text-black transition duration-300" />
  </a>

  <a href="#" target="_blank">
    <FaLinkedin className="text-base text-gray-600 hover:text-black transition duration-300" />
  </a>

  <a href="#" target="_blank">
    <FaInstagram className="text-base text-gray-600 hover:text-black transition duration-300" />
  </a>

  <a href="#" target="_blank">
    <FaTwitter className="text-base text-gray-600 hover:text-black transition duration-300" />
  </a>
</div>
    </>
  );
}
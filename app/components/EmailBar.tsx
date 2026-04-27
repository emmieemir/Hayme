"use client";

export default function EmailBar() {
  return (
    <div
      className="
      fixed
      right-2 md:right-8
      top-1/2
      -translate-y-1/2
      flex
      flex-col
      items-center
      gap-4 md:gap-6
      z-50
      group
    "
    >
      
      {/* LINE */}
      <div
        className="
        w-[2px]
        h-16 md:h-24
        bg-gray-300
        transition-all
        duration-500
        group-hover:h-32 md:group-hover:h-52
      "
      ></div>

      {/* EMAIL */}
      <a
        href="mailto:youremail@gmail.com"
        className="
          text-[10px] md:text-sm
          text-gray-500
          hover:text-black
          transition-all
          duration-500
          tracking-[0.2em] md:tracking-[0.25em]
          hover:tracking-[0.3em] md:hover:tracking-[0.4em]
          [writing-mode:vertical-rl]
        "
      >
        emamasaleem00@gmail.com
      </a>

      {/* LINE */}
      <div
        className="
        w-[2px]
        h-16 md:h-24
        bg-gray-300
        transition-all
        duration-500
        group-hover:h-32 md:group-hover:h-52
      "
      ></div>

    </div>
  );
}
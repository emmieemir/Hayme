"use client";

export default function EmailBar() {
  return (
    <div className="
    fixed
    right-8
    top-1/2
    -translate-y-1/2
    hidden
    md:flex
    flex-col
    items-center
    gap-6
    z-50
    group
    ">
              {/* LINE */}
    <div className="
    w-[2px]
    h-24
    bg-gray-300
    transition-all
    duration-500
    group-hover:h-52
    "></div>


      {/* EMAIL */}
    <a
    href="mailto:youremail@gmail.com"
    className="
        text-gray-500
        hover:text-black
        transition-all
        duration-500
        tracking-[0.25em]
        hover:tracking-[0.4em]
        [writing-mode:vertical-rl]
        relative
    "
    >
    emamasaleem00@gmail.com
    </a>

      {/* LINE */}
    <div className="
    w-[2px]
    h-24
    bg-gray-300
    transition-all
    duration-500
    group-hover:h-52
    "></div>

    </div>
  );
}
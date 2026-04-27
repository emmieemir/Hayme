"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="
        hidden md:flex
        fixed top-6 left-1/2 -translate-x-1/2
        z-50
        bg-white/80
        backdrop-blur-xl
        shadow-lg
        border border-gray-200
        rounded-full
        px-10 py-4
      "
      >
        <div className="flex gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  relative
                  font-medium
                  transition
                  ${
                    isActive
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-black
                  after:transition-all
                  after:duration-300
                  hover:after:w-full

                  before:absolute
                  before:left-0
                  before:-top-1
                  before:h-[2px]
                  before:w-0
                  before:bg-black
                  before:transition-all
                  before:duration-300
                  hover:before:w-full
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVBAR */}
      <nav
        className="
        md:hidden
        fixed bottom-5 left-1/2 -translate-x-1/2
        w-[92%]
        z-50
        bg-white/90
        backdrop-blur-xl
        shadow-2xl
        border border-gray-200
        rounded-full
        px-6 py-4
      "
      >
        <div className="flex justify-between items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`
                  text-sm font-medium transition
                  ${
                    isActive
                      ? "text-black"
                      : "text-gray-500"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
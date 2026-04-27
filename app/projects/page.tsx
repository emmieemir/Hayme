export default function Projects() {
  return (
    <main className="bg-[#FAFAFA] text-[#111827] min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        {/* <h1 className="section-heading">
          Projects
        </h1> */}

        {/* COMING SOON SECTION */}
        <div className="flex items-center justify-center min-h-[65vh]">

          <div className="text-center">

            {/* Badge */}
         <div className="
  relative
  inline-block
  px-4
  py-2
  rounded-full
  border
  border-black
  text-sm
  font-medium
  mb-6
  overflow-hidden
  group
">

  {/* Animated Fill */}
  <span className="
    absolute
    inset-0
    bg-black
    scale-x-0
    origin-left
    transition-transform
    duration-500
    group-hover:scale-x-100
  "></span>

  {/* Text */}
  <span className="
    relative
    z-10
    text-black
    group-hover:text-white
    transition
  ">
    Work In Progress
  </span>

</div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Coming Soon
            </h2>

            {/* Text */}
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Exciting full-stack projects are currently in development.
              Soon this section will showcase modern web experiences,
              scalable products, and creative builds.
            </p>

            {/* Loader Dots */}
            <div className="flex justify-center gap-3">

              <span className="w-3 h-3 bg-black rounded-full animate-bounce"></span>

              <span
                className="w-3 h-3 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "0.15s" }}
              ></span>

              <span
                className="w-3 h-3 bg-black rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
              ></span>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
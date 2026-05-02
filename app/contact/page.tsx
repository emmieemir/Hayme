export default function Contact() {
  return (
<main
  className="
    bg-[#FAFAFA]
    text-[#111827]
    min-h-screen
    flex
    items-start md:items-center
    px-6
    pt-28 md:pt-0
    pb-16
  "
>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 w-full">

        {/* LEFT SIDE */}
        <div>

        <h1 className="section-heading">
            Let's Build Something Great
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Have a project in mind?  
            Want to collaborate?  
            Or just say hello?
            <br/><br/>
            I'm always open to discussing new opportunities and
            exciting ideas.
          </p>

          <div className="space-y-4 text-gray-700">

            <p>
              📧 emamasaleem00@gmail.com
            </p>

            <p>
              🌍 Based in Pakistan — Available Worldwide
            </p>

          </div>

        </div>



        {/* RIGHT SIDE FORM */}
        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-black
              transition
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-black
              transition
            "
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:border-black
              transition
            "
          />

          <button
            className="
              w-full
              py-4
              bg-black
              text-white
              rounded-xl
              hover:bg-gray-800
              transition
              font-medium
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}
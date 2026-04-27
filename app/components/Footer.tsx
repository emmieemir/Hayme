export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <p className="text-gray-600">
          © {new Date().getFullYear()} Emama. All rights reserved.
        </p>

        {/* CENTER */}
        <p className="text-gray-500 text-sm">
          Built with precision and passion.
        </p>

        {/* RIGHT */}
        <div className="flex gap-6 text-gray-600">

          <a href="#" className="hover:text-black transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-black transition">
            GitHub
          </a>

          <a href="#" className="hover:text-black transition">
            Twitter
          </a>

        </div>

      </div>

    </footer>
  );
}
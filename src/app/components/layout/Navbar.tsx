export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-[1100px] px-4 flex items-center justify-between py-4">
        <div className="font-semibold text-lg text-white">
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="SynerMuscle Logo"
              className="h-5 w-5 object-contain"
            />
            <span className="font-semibold text-lg text-white">
              SynerMuscle
            </span>
          </a>{" "}
        </div>

        <div className="hidden sm:flex gap-6 text-sm text-gray-300">
          <a href="#hero">Home</a>
          <a href="#stats">Statistics</a>
          <a href="#features">Features</a>
          {/* <a href="#testimonials">Testimonials</a> */}
          {/* <a href="#pricing">Plans</a> */}
          <a href="#faq">FAQ</a>
        </div>

        <a
          href="#download"
          className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-lg text-black text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}

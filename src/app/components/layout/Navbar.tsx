export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3">
        <div className="font-semibold text-white">
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="SynerMuscle Logo"
              className="h-7 w-7 rounded-md object-contain ring-1 ring-white/15"
            />
            <span className="text-base font-semibold text-white sm:text-lg">
              SynerMuscle
            </span>
          </a>{" "}
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-gray-300 sm:flex">
          <a className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#hero">Home</a>
          <a className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#stats">Statistics</a>
          <a className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#features">Features</a>
          <a className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#preview">Preview</a>
          {/* <a href="#testimonials">Testimonials</a> */}
          <a href="#pricing">Plans</a>
          <a className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#faq">FAQ</a>
        </div>

        <div className="flex justify-end">
          <a
            href="#download"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#07111f] shadow-lg shadow-sky-500/10 transition hover:-translate-y-0.5 hover:bg-sky-100"
          >
            Download
          </a>
          <a
            href="#login"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#07111f] shadow-lg shadow-sky-500/10 transition hover:-translate-y-0.5 hover:bg-sky-100"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import SignupModal from "../../sections/SignupModal";

export default function Navbar() {
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm shadow-slate-200/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3">
          <div className="font-semibold text-foreground">
              <a href="/#hero" className="flex items-center gap-2">
              <img
                src="/favicon.ico"
                alt="SynerMuscle Logo"
                className="h-7 w-7 rounded-md object-contain ring-1 ring-slate-200"
              />
              <span className="text-base font-semibold text-foreground sm:text-lg">
                SynerMuscle
              </span>
            </a>{" "}
          </div>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm text-slate-600 sm:flex">
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#hero">Home</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#stats">Statistics</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#features">Features</a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#preview">Preview</a>
            {/* <a href="#testimonials">Testimonials</a> */}
            {/* <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#pricing">Plans</a> */}
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-accent" href="/#faq">FAQ</a>
          </div>

          <div className="flex justify-end gap-2">
            <a
              href="/#download"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Download
            </a>
            {/* <button
              type="button"
              onClick={() => setIsSignupOpen(true)}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-foreground shadow-lg shadow-slate-200/70 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Sign up
            </button> */}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSignupOpen && (
          <SignupModal selectedPlan={null} onClose={() => setIsSignupOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

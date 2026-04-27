"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import SocialProof from "../ui/SocialProof";
import SignupForm from "../ui/SignupForm";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

function ParallaxHeroVisual() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const r = ref.current;
      if (!r) return;
      const rect = r.getBoundingClientRect();
      const offset = Math.max(0, 1 - rect.top / window.innerHeight);
      setY(offset * 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ y }}
      className="relative w-full flex-1"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/40 to-highlight/30 opacity-60 blur-3xl" />
      <div className="relative mx-auto aspect-[1024/917] w-full max-w-[510px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-b from-[#0e1a2d] to-[#07111f] shadow-2xl shadow-sky-950/50">
        <Image
          src="/hero.png"
          alt="SynerMuscle - See your muscles work"
          fill
          className="select-none object-cover object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/35 p-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 text-xs text-white/80">
            <span className="font-medium text-white">Advanced 3D Content</span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-100 ring-1 ring-emerald-300/20">
              Live
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  // const highlights = [
  //   "Proven methodology",
  //   "Customized workouts",
  //   "Advanced 3D content",
  // ];

  return (
    <section id="hero" className="relative">
      <Container>
        <div className="relative overflow-hidden rounded-[1.6rem] glass-panel sm:rounded-[2rem]">
          <div className="absolute inset-0 grid-mask" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="relative z-10 flex flex-col-reverse items-center gap-10 p-5 sm:flex-row sm:gap-12 sm:p-8 lg:p-10">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-medium text-sky-100"
              >
                <Sparkles className="h-4 w-4 text-highlight" />
                The SynerMuscle App is Now Available!
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-balance text-4xl font-bold leading-[1.02] tracking-normal sm:text-6xl"
              >
                The SynerMuscle App is Now Available!
                <span className="mt-2 block bg-gradient-to-r from-accent via-white to-highlight bg-clip-text text-transparent">
                  Start Your Fitness Journey Today
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 max-w-[56ch] text-[15px] leading-7 text-muted sm:text-lg"
              >
                Based on "Synergistic Muscle Training" by Klaus Arndt (millions sold worldwide). Customized workouts for any gender and skill level with advanced 3D content.
              </motion.p>

              {/* <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-highlight" />
                    {item}
                  </span>
                ))}
              </div> */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f] shadow-xl shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-sky-100"
                >
                  GET THE APP NOW
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#preview"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Preview
                </a>
              </div>

              <SocialProof className="mt-6" />
              {/* <SignupForm /> */}
            </div>

            <ParallaxHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

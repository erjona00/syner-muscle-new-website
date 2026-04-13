"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import SocialProof from "../ui/SocialProof";
import SignupForm from "../ui/SignupForm";
import { motion } from "framer-motion";
import Image from "next/image";

// 1️⃣ Shto funksionin ParallaxHeroVisual këtu
function ParallaxHeroVisual() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const r = ref.current;
      if (!r) return;
      const rect = r.getBoundingClientRect();
      const offset = Math.max(0, 1 - rect.top / window.innerHeight);
      setY(offset * 12); // subtle parallax
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
      className="relative flex-1 w-full"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl opacity-40 bg-gradient-to-tr from-accent to-highlight" />
      <div className="relative mx-auto aspect-[1024/917] w-80 sm:w-[500px] rounded-2xl border border-border bg-gradient-to-b from-[#0c0c12] to-[#0a0a0f] shadow-glow overflow-hidden">
        <Image
          src="/hero.png"
          alt="SynerMuscle - See your muscles work"
          fill
          className="object-cover object-center select-none"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </motion.div>
  );
}

// 2️⃣ Funksioni Hero
export default function Hero() {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="mt-0 mb-0 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card/100 shadow-inner-lg bg-blue-1000">
          <div className="absolute inset-0 grid-mask" />
          <div className="relative z-10 flex flex-col-reverse items-center gap-8 p-6 sm:flex-row sm:gap-12 sm:p-10">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]"
              >
                The SynerMuscle App is Now Available!
                <span className="from-accent to-highlight bg-gradient-to-r bg-clip-text text-transparent block mt-2">
                  Start Your Fitness Journey Today
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-3 text-[15px] sm:text-lg text-muted max-w-[52ch]"
              >
                Based on "Synergistic Muscle Training" by Klaus Arndt (millions sold worldwide). Customized workouts for any gender and skill level with advanced 3D content.
              </motion.p>

              <SocialProof className="mt-5" />
              {/* <SignupForm /> */}
            </div>

            {/* 3️⃣ Vendosim komponentin ParallaxHeroVisual këtu */}
            <ParallaxHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
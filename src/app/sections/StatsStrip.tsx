"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Flame, Globe, Users } from "lucide-react";
import CountUp from "react-countup";

function StatsStripContent() {
  const { scrollYProgress } = useScroll();

  // 🎯 Parallax values
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    {
      label: "Creators following",
      value: 300000,
      suffix: "+",
      icon: Users,
    },
    {
      label: "Beta signups",
      value: 24000,
      suffix: "+",
      icon: Flame,
    },
    {
      label: "Global reach",
      value: 350000000,
      suffix: "+",
      icon: Globe,
    },
  ];

  const benefits = [
    "Proven methodology",
    "Advanced 3D visualization",
    "No spam. Cancel anytime.",
  ];

  return (
    <section id="stats" className="relative space-y-10 overflow-hidden py-10">
      {/* 🎨 Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🔢 STATS */}
      <Container>
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl divide-y sm:divide-y-0 sm:divide-x divide-white/5"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="group relative p-6 text-center transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/10 to-transparent blur-xl" />

                {/* 🔥 Icon */}
                <div className="mb-3 flex justify-center">
                  <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition" />
                </div>

                {/* 🔢 Number */}
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  <CountUp end={s.value} duration={2} separator="," />
                  {s.suffix}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      {/* ✅ BENEFITS */}
      <Container>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {benefits.map((item, i) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted backdrop-blur hover:bg-white/10 transition"
            >
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

export default function StatsStrip() {
  return <StatsStripContent />;
}
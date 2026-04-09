"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// 1️⃣ Komponenti i plotë i StatsStrip
function StatsStripContent() {
  const stats = [
    { label: "Creators following", value: "300k+" },
    { label: "Beta signups", value: "24k" },
    { label: "Global reach", value: "350M" },
  ];

  const benefits = [
    "Proven methodology",
    "Advanced 3D visualization",
    "No spam. Cancel anytime.",
  ];

  return (
    <section id="stats" className="space-y-6">
      <Container>
        <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur bg-gray-900/60">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="p-4 text-center sm:p-6"
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>

      <Container>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-3"
        >
          {benefits.map((item, i) => (
            <motion.li
              key={item}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

// 2️⃣ Komponenti kryesor që thërret StatsStripContent
export default function StatsStrip() {
  return <StatsStripContent />;
}
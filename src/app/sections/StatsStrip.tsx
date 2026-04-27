"use client";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { CheckCircle2, Flame, Globe, Users } from "lucide-react";
import CountUp from "react-countup";

function StatsStripContent() {
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
    <section id="stats" className="relative overflow-hidden py-6">
      <Container>
        <div className="flex flex-col items-center gap-6">

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl glass-panel overflow-hidden rounded-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex flex-col items-center text-center p-6 sm:p-8"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-highlight" />
                    </div>

                    <div className="text-3xl sm:text-4xl font-bold text-white">
                      <CountUp end={s.value} duration={2} separator="," />
                      {s.suffix}
                    </div>

                    <div className="mt-2 text-sm text-muted">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* BENEFITS (premium pills centered) */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl"
          >
            {benefits.map((item, i) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs sm:text-sm text-white/80 backdrop-blur-xl transition hover:bg-white/[0.12] hover:border-white/20"
              >
                <CheckCircle2 className="h-4 w-4 text-highlight" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </Container>
    </section>
  );
}

export default function StatsStrip() {
  return <StatsStripContent />;
}
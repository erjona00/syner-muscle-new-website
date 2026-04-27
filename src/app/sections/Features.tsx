"use client";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { BrainCircuit, Dumbbell, Flame } from "lucide-react";

function FeaturesList() {
  const items = [
    {
      icon: Dumbbell,
      title: "Synergistic Muscle Training",
      text: "Based on Klaus Arndt's proven method with millions of copies sold worldwide.",
    },
    {
      icon: BrainCircuit,
      title: "Advanced 3D Content",
      text: "Collaborating with Novagenics for cutting-edge workout visualization.",
    },
    {
      icon: Flame,
      title: "Universal Training",
      text: "Customized workouts for any gender and skill level. From beginner to elite.",
    },
  ];

  return (
    <section id="features">
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title mt-2">Built around smarter training</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Clear guidance, professional visualization, and workout support in one polished experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.06 * i, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:border-sky-300/35 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-sky-950/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-accent/15 blur-3xl transition group-hover:bg-highlight/20" />
                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
                    <Icon className="h-6 w-6 text-highlight" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-normal text-white">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{it.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default function Features() {
  return <FeaturesList />;
}

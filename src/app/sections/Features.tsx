"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Dumbbell, BrainCircuit, Flame } from "lucide-react";

// 1️⃣ Funksioni i plotë FeaturesList (me ikonat dhe animacionet)
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-900 to-gray-700 p-5 backdrop-blur transition-shadow hover:shadow-glow"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/15 to-highlight/15 opacity-0 blur-2xl transition-opacity group-hover:opacity-50" />
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// 2️⃣ Komponenti Features i thjeshtë që thërret FeaturesList
export default function Features() {
  return <FeaturesList />;
}
"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium text-white transition hover:bg-white/[0.04]"
      >
        <span>{q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-highlight transition duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-6 text-muted">{a}</p>}
    </div>
  );
}

function FAQList() {
  const items = [
    {
      q: "❓ What is SynerMuscle?",
      a: "SynerMuscle is a high-performance fitness app designed to help you track workouts, build muscle, and optimize your training using data-driven insights and advanced analytics.",
    },
    {
      q: "❓ Is the SynerMuscle app available now?",
      a: "SynerMuscle is officially live and available for download on iOS. We’re actively working on the Android version, which will be released soon.",
    },
    {
      q: "❓ How much does it cost?",
      a: "Start for free and upgrade anytime. Unlock advanced features with flexible premium plans designed to support your fitness journey.",
    },
    {
      q: "❓ Can I cancel my subscription anytime?",
      a: "Yes — you can cancel anytime. On iOS, subscriptions are managed through the App Store, and on Android through the Google Play Store.",
    },
  ];

  return (
    <section id="faq">
  <Container>
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-1 lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-xl"
      >
        {items.map((item, i) => (
          <Accordion key={i} {...item} />
        ))}
      </motion.div>
    </div>
  </Container>
</section>
  );
}

export default function FAQ() {
  return <FAQList />;
}

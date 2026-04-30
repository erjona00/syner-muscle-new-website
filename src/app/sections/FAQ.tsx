"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium text-foreground transition hover:bg-sky-50"
      >
        <span>{q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-highlight transition duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden px-5 pb-5 text-sm leading-6 text-muted"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQList() {
  const items = [
    {
      q: "What is SynerMuscle?",
      a: "SynerMuscle is a high-performance fitness app designed to help you track workouts, build muscle, and optimize your training using data-driven insights and advanced analytics.",
    },
    {
      q: "How much does it cost?",
      a: "Start for free and upgrade anytime. Unlock advanced features with flexible premium plans designed to support your fitness journey.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel anytime. On iOS, subscriptions are managed through the App Store, and on Android through the Google Play Store.",
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
            className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-slate-200/80 backdrop-blur-xl"
          >
            {items.map((item) => (
              <Accordion key={item.q} {...item} />
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

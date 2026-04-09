"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";

// 🟢 Komponenti i thjeshtë Accordion
function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-medium"
      >
        {q}
        <span className="ml-2">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-4 pb-4 text-sm text-muted">{a}</p>}
    </div>
  );
}

// 1️⃣ Funksioni FAQ me të gjitha items
function FAQList() {
  const items = [
    {
      q: "When does early access start?",
      a: "We'll be releasing in November 2025. Join the list to reserve your spot.",
    },
    {
      q: "Which platforms?",
      a: "iOS and Android at launch. Web companion shortly after.",
    },
    {
      q: "How much will it cost?",
      a: "If you join early, you'll win lifetime access with 80% off.",
    },
  ];

  return (
    <section id="faq">
      <Container>
        <div className="mx-auto w-full max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 divide-y divide-white/30 rounded-2xl border border-border bg-card/70">
            {items.map((item, i) => (
              <Accordion key={i} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// 2️⃣ Komponenti kryesor që thërret FAQList
export default function FAQ() {
  return <FAQList />;
}
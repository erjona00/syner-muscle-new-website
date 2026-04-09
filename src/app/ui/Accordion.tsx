"use client";
import { motion } from "framer-motion";
import React from "react";
import { AnimatePresence } from "framer-motion";

export default function Accordion({ q, a }: { q: string; a: string }) {
  const id = q.replace(/\s+/g, "-").toLowerCase();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-5">
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm sm:text-base font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-muted">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-muted">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px w-full bg-white/10" />
    </div>
  );
}

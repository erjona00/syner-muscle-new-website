"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={{ opacity: visible ? 1 : 0 }}
      className="fixed bottom-28 right-8 z-50 rounded-full bg-blue-500 p-3 text-white shadow-lg shadow-slate-900/20"
    >
      ↑
    </motion.button>
  );
}

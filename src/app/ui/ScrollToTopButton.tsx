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
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={{ opacity: visible ? 1 : 0 }}
      className="fixed bottom-8 right-8 bg-blue-500 p-3 rounded-full text-white"
    >
      ↑
    </motion.button>
  );
}
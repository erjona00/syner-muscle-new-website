"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 3000], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 180]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -right-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
      />
    </div>
  );
}
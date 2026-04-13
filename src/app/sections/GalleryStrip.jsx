"use client";
import * as React from "react";
import { motion } from "framer-motion";

export default function GalleryStrip() {
  const images = [
    "/first.jpg",
    "/second.jpg",
    "/third.jpg",
    "/fourth.jpg",
    "/fifth.jpg",
    "/sixth.jpg",
  ];

  return (
    <section id="preview" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Built for Performance
          </h2>
          <p className="text-sm text-muted mt-2">
            Experience SynerMuscle in action
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <img
                src={img}
                alt={`gallery-${i}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:blur-[1px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition" />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
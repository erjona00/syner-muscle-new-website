"use client";
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
    <section id="preview" className="py-4">
      <div className="mx-auto max-w-[1100px] px-0">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title mt-2">Built for Performance</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Experience SynerMuscle in action
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.42 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              className="group relative aspect-[3/5] overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-slate-300/60 transition hover:border-sky-300"
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-45" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/24 to-transparent" />
              </div>
              <div className="absolute inset-x-3 bottom-3 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

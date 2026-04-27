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
              className="group relative aspect-[3/5] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] shadow-xl shadow-black/20"
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-55" />
              <div className="absolute inset-x-3 bottom-3 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

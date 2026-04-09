"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";

// 1️⃣ Komponenti kryesor i Testimonials me navigim
function TestimonialsList() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Fitness Coach",
      text: "SynerMuscle transformed my workouts! The 3D visualizations are incredible.",
    },
    {
      name: "Jane Smith",
      role: "Athlete",
      text: "Finally a personalized program that understands my goals!",
    },
    {
      name: "Carlos M.",
      role: "Gym Enthusiast",
      text: "Easy to follow and really motivating. Highly recommend!",
    },
  ];

  const [index, setIndex] = React.useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="mt-16">
      <Container>
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center shadow-inner-lg"
            >
              <p className="text-sm sm:text-base text-muted">{testimonials[index].text}</p>
              <div className="mt-4 font-semibold">{testimonials[index].name}</div>
              <div className="text-xs text-muted">{testimonials[index].role}</div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-900/80 p-2 text-white shadow-lg hover:bg-accent/100 active:scale-95"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-900/80 p-2 text-white shadow-lg hover:bg-accent/100 active:scale-95"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
}

// 2️⃣ Komponenti kryesor që thërret TestimonialsList
export default function Testimonials() {
  return <TestimonialsList />;
}
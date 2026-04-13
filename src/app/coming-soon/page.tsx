"use client";

import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-screen flex-col bg-black text-white"
    >
      <Navbar />

      <main className="flex flex-1 items-center justify-center">
        <Container>
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              🚀 The SynerMuscle app will be launched on Android soon
            </h1>

            <p className="text-white/70 max-w-xl mx-auto">
              The SynerMuscle app is currently under development and will be
              available soon on Android. Stay tuned for updates!
            </p>

            <div className="mt-6">
              <a
                href="/"
                className="inline-block rounded-lg bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </motion.div>
  );
}

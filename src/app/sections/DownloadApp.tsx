"use client";
import Container from "../components/layout/Container";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

function DownloadAppContent() {
  return (
    <section id="download" className="py-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.6rem] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 shadow-2xl shadow-sky-200/50 backdrop-blur-xl sm:p-8"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute bottom-4 right-8 hidden h-24 w-24 rounded-full border border-dashed border-emerald-300/40 sm:block motion-ring" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="float-soft mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-lg shadow-emerald-200/50">
                <Download className="h-6 w-6 text-highlight" />
              </div>
              <h3 className="text-3xl font-bold tracking-normal text-foreground">
                Get the SynerMuscle App
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                Download now on iOS and Android to start your personalized
                workouts and track your progress anywhere.
              </p>
            </div>

            <a
              href="/start"
              className="premium-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:w-auto"
            >
              GET THE APP NOW
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function DownloadApp() {
  return <DownloadAppContent />;
}

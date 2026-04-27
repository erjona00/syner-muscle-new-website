"use client";
import Container from "../components/layout/Container";
import { ArrowRight, Download } from "lucide-react";

function DownloadAppContent() {
  return (
    <section id="download" className="py-4">
      <Container>
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-gradient-to-br from-sky-400/18 via-white/[0.07] to-emerald-400/14 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur-xl sm:p-8">
          <div className="absolute inset-0 grid-mask" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Download className="h-6 w-6 text-highlight" />
              </div>
              <h3 className="text-3xl font-bold tracking-normal text-white">
                Get the SynerMuscle App
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
                Download now on iOS and Android to start your personalized
                workouts and track your progress anywhere.
              </p>
            </div>

            <a
              href="/download"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-sky-100 sm:w-auto"
            >
              GET THE APP NOW
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function DownloadApp() {
  return <DownloadAppContent />;
}

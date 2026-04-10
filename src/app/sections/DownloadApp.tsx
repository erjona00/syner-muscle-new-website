"use client";
import * as React from "react";
import Container from "../components/layout/Container";
import Link from "next/link";

// 1️⃣ Funksioni i plotë i DownloadApp
function DownloadAppContent() {
  return (
    <section id="download" className="mt-4 mb-4 py-6">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-3xl font-bold text-white">
              Get the SynerMuscle App
            </h3>
            <p className="mt-2 text-white/80 text-sm sm:max-w-md">
              Download now on iOS and Android to start your personalized
              workouts and track your progress anywhere.
            </p>
          </div>

          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* App Store */}
            <Link
              href="https://apps.apple.com/us/app/synermuscle-workout-tracker/id6760599921"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black font-semibold shadow-lg hover:shadow-xl transition"
            >
              <img src="/app-store.svg" alt="Apple Store" className="h-6 w-6" />
              App Store
            </Link>

            {/* Google Play */}
            <Link
              href="/coming-soon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black font-semibold shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/google-playstore.svg"
                alt="Google Play"
                className="h-6 w-6"
              />
              Google Play
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

// 2️⃣ Export default
export default function DownloadApp() {
  return <DownloadAppContent />;
}

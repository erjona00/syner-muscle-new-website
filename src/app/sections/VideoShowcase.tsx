"use client";

import { Play } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section id="training-video" className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="relative min-h-[420px] sm:min-h-[560px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/videos/31035752/body-fitness-girl-sport-31035752.jpeg?auto=compress&cs=tinysrgb&w=1600"
        >
          <source
            src="https://www.pexels.com/download/video/31035752/"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#07111f]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/58 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-[1100px] items-center px-4 py-16 sm:min-h-[560px] sm:px-8">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-highlight backdrop-blur-xl">
              <Play className="h-4 w-4 fill-current" />
              Training in motion
            </div>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-6xl">
              Visualize every move before you train.
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-7 text-white/76 sm:text-lg">
              SynerMuscle brings workout guidance, muscle focus, and performance tracking into a more immersive training experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

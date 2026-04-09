"use client";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AnimatedBackground from "./ui/AnimatedBackground";
import ScrollToTopButton from "./ui/ScrollToTopButton";

import Hero from "./sections/Hero";
import StatsStrip from "./sections/StatsStrip";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import DownloadApp from "./sections/DownloadApp";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-14 sm:gap-28 px-4 py-10 sm:px-8 bg-blue-950">
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <StatsStrip />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <DownloadApp />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
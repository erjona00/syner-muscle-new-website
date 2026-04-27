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
// import Testimonials from "./sections/Testimonials";
import DownloadApp from "./sections/DownloadApp";
import GalleryStrip from "./sections/GalleryStrip"
import VideoShowcase from "./sections/VideoShowcase";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col gap-16 overflow-hidden px-4 pb-10 pt-24 sm:gap-24 sm:px-8 sm:pb-14 sm:pt-28">
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <StatsStrip />
      <Features />
      <VideoShowcase />
      <GalleryStrip />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <DownloadApp />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

"use client";
import * as React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, Flame, BrainCircuit, Dumbbell, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


function AnimatedBackground() {
  const { scrollY } = useScroll();

  // Create multiple floating gradient shapes with different scroll speeds
  const y1 = useTransform(scrollY, [0, 3000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -200]);
  const y4 = useTransform(scrollY, [0, 3000], [0, -120]);

  const rotate1 = useTransform(scrollY, [0, 3000], [0, 180]);
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -90]);


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mobile-optimized gradient shapes - more visible and better positioned */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-600/15 blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-1/4 -left-16 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-500/12 to-pink-500/12 blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y4, rotate: rotate1 }}
        className="absolute top-1/2 left-1/4 w-44 h-44 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-indigo-500/8 to-purple-500/8 blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mobile accent shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-2/3 left-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-pink-500/12 to-red-500/12 blur-xl sm:blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute bottom-1/4 left-1/3 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 blur-xl sm:blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

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

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1100px]">{children}</div>;
}

function SocialProof({ className = "" }: { className?: string }) {
  const avatars = [1, 2, 3, 4, 5, 6].map((i) => `https://i.pravatar.cc/64?img=${i}`);
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <Image key={src} src={src} alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-card" />
        ))}
      </div>
      <div className="text-xs text-muted">
        <span className="text-foreground">300k+</span> creators and athletes follow SynerMuscle
      </div>
    </div>
  );
}

function ParallaxHeroVisual() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const r = ref.current;
      if (!r) return;
      const rect = r.getBoundingClientRect();
      const offset = Math.max(0, 1 - rect.top / window.innerHeight);
      setY(offset * 12); // subtle parallax
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ y }}
      className="relative flex-1 w-full"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl opacity-40 bg-gradient-to-tr from-accent to-highlight" />
      <div className="relative mx-auto aspect-[1024/917] w-80 sm:w-[500px] rounded-2xl border border-border bg-gradient-to-b from-[#0c0c12] to-[#0a0a0f] shadow-glow overflow-hidden">
        <Image
          src="/hero.png"
          alt="SynerMuscle - See your muscles work"
          fill
          className="object-cover object-center select-none"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </motion.div>
  );
}

function Navbar() {
  return (
<div className="absolute top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-[1100px] px-4 flex items-center justify-between py-4">

        {/* Logo */}
        <div className="font-semibold text-lg text-white">
          <a href="#hero">SynerMuscle</a>
        </div>

        {/* Links */}
        <div className="hidden sm:flex gap-6 text-sm text-gray-300">
          <a href="#hero" className="hover:text-white">Home</a>
          <a href="#stats" className="hover:text-white">Statistics</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>

        {/* Button */}
        <a
          href="#download"
          className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-lg text-black text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section id="hero" className="relative">
      <Container>
        <div className="mt-0 mb-0 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card/100 shadow-inner-lg bg-blue-1000">
          <div className="absolute inset-0 grid-mask" />
          <div className="relative z-10 flex flex-col-reverse items-center gap-8 p-6 sm:flex-row sm:gap-12 sm:p-10">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]"
              >
                SynerMuscle App is coming!
                <span className="from-accent to-highlight bg-gradient-to-r bg-clip-text text-transparent block mt-2">Join for Free Early Access</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-3 text-[15px] sm:text-lg text-muted max-w-[52ch]"
              >
                Based on "Synergistic Muscle Training" by Klaus Arndt (millions sold worldwide). Customized workouts for any gender and skill level with advanced 3D content.
              </motion.p>

              <SocialProof className="mt-5" />

              <SignupForm />
            </div>

            <ParallaxHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SignupForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(
        'https://admin.tribus-dynamics.de/api/syner-newsletter/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      if (response.ok) {
        setMessage('Successfully subscribed to newsletter!');
        setIsSuccess(true);
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage(
          errorData.message || 'Failed to subscribe. Please try again.',
        );
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="flex w-full max-w-md items-center gap-2"
      >
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            name="email"
            type="email"
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full rounded-xl border border-border bg-black/40 px-9 py-3 text-sm outline-none ring-0 transition focus:border-accent/60 focus:shadow-glow placeholder:text-muted/70 disabled:opacity-50"
            aria-label="Email address"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !email}
          className="rounded-xl bg-gradient-to-r from-accent to-highlight px-4 py-3 text-sm font-medium text-black transition active:scale-[.98] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? 'SENDING...' : 'Join early access'}
        </button>
      </motion.form>

      {/* Status Message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-center text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'
            }`}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { label: "Creators following", value: "300k+" },
    { label: "Beta signups", value: "24k" },
    { label: "Global reach", value: "350M" },
  ];
  return (
    <section id="stats" className="space-y-6">
      <Container>
        <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur bg-gray-900/60">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="p-4 text-center sm:p-6"
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Benefits list aligned with stats */}
      <Container>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20%" }}
          className="grid grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-3"
        >
          {[
            "Proven methodology",
            "Advanced 3D visualization",
            "No spam. Cancel anytime.",
          ].map((item, i) => (
            <motion.li
              key={item}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Dumbbell,
      title: "Synergistic Muscle Training",
      text: "Based on Klaus Arndt's proven method with millions of copies sold worldwide.",
    },
    {
      icon: BrainCircuit,
      title: "Advanced 3D Content",
      text: "Collaborating with Novagenics for cutting-edge workout visualization.",
    },
    {
      icon: Flame,
      title: "Universal Training",
      text: "Customized workouts for any gender and skill level. From beginner to elite.",
    },
  ];
  return (
    <section id="features">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 bg-gray-900/20">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition-shadow hover:shadow-glow"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/15 to-highlight/15 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


function Pricing() {
  return (
    <section id="pricing" className="mt-20">
      <Container>
        <h2 className="text-2xl font-semibold text-center">Pricing</h2>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { name: "Weekly", oldPrice: "$19,99", price: "$7,99", desc: "€0,61 / week" },
            { name: "Monthly", oldPrice: "$28,99", price: "$14,99", desc: "€14,99 / week" },
            { name: "Yearly", oldPrice: "$119,99", price: "$22,99", desc: "€22,99 / week" },
          ].map((p) => (
            <div key={p.name} className="p-6 rounded-2xl border bg-card/70 text-center">
              <h3 className="text-lg font-semibold">{p.name}</h3>

              {/* Old price */}
              <div className="text-sm text-muted line-through">
                {p.oldPrice}
              </div>

              {/* New price */}
              <div className="text-2xl mt-1 font-bold text-accent">
                {p.price}
              </div>

              <p className="text-sm text-muted mt-2">{p.desc}</p>

              {/* <button className="mt-4 px-4 py-2 rounded-lg bg-accent text-black">
                Choose
              </button> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "When does early access start?",
      a: "We'll be releasing in November 2025. Join the list to reserve your spot.",
    },
    { q: "Which platforms?", a: "iOS and Android at launch. Web companion shortly after." },
    { q: "How much will it cost?", a: "If you join early, you'll win lifetime access with 80% off." },
  ];
  return (
    <section id="faq">
      <Container>
        <div className="mx-auto w-full max-w-2xl ">
          <h3 className="text-xl sm:text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 divide-y divide-white/30 rounded-2xl border border-border bg-card/70">
            {items.map((item, i) => (
              <Accordion key={i} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Accordion({ q, a }: { q: string; a: string }) {
  const id = q.replace(/\s+/g, "-").toLowerCase();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-5">
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm sm:text-base font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-muted">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-muted">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px w-full bg-white/10" />
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // shfaq buttonin kur scroll > 300px
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // scroll gradual
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-500/80 p-3 text-white shadow-lg hover:bg-accent/100 active:scale-95"
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Fitness Coach",
      text: "SynerMuscle transformed my workouts! The 3D visualizations are incredible."
    },
    {
      name: "Jane Smith",
      role: "Athlete",
      text: "Finally a personalized program that understands my goals!"
    },
    {
      name: "Carlos M.",
      role: "Gym Enthusiast",
      text: "Easy to follow and really motivating. Highly recommend!"
    }
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
        <div className="relative">
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


function DownloadApp() {
  return (
    <section id="download" className="mt-4 mb-4 py-6">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-3xl font-bold text-white">Get the SynerMuscle App</h3>
            <p className="mt-2 text-white/80 text-sm sm:max-w-md">
              Download now on iOS and Android to start your personalized workouts and track your progress anywhere.
            </p>
          </div>

          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* App Store */}
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black font-semibold shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/apple-logo.svg"
                alt="Apple Store"
                className="h-6 w-6"
              />
              App Store
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black font-semibold shadow-lg hover:shadow-xl transition"
            >
              <img
                src="/google-play-logo.svg"
                alt="Google Play"
                className="h-6 w-6"
              />
              Google Play
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="pb-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card/70 p-5 sm:flex-row sm:p-6 ">
          <div className="text-sm text-muted">© {new Date().getFullYear()} SynerMuscle</div>
          <div className="flex items-center gap-5 text-sm ">
            <Link href="/privacy-policy" className="hover:text-foreground/90 text-muted transition">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground/90 text-muted transition">Terms</Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@gmail.com"
              target="_blank"
              className="hover:text-foreground/90 text-muted transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
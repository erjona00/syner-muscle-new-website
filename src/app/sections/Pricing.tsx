"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, LockKeyhole, Mail, ShieldCheck, X } from "lucide-react";
import Container from "../components/layout/Container";

type Plan = {
  name: string;
  oldPrice: string;
  price: string;
  desc: string;
  badge?: string;
  featured?: boolean;
  perks: string[];
};

const plans: Plan[] = [
  {
    name: "Weekly",
    oldPrice: "$19.99",
    price: "$7.99",
    desc: "Flexible access for short training cycles",
    perks: ["Full workout library", "3D muscle previews", "Cancel anytime"],
  },
  {
    name: "Monthly",
    oldPrice: "$28.99",
    price: "$14.99",
    desc: "Best balance for consistent progress",
    badge: "Most popular",
    featured: true,
    perks: ["Personalized plans", "Advanced 3D content", "Progress guidance"],
  },
  {
    name: "Yearly",
    oldPrice: "$119.99",
    price: "$22.99",
    desc: "Maximum value for long-term training",
    badge: "Best value",
    perks: ["Year-round access", "All premium features", "Priority updates"],
  },
];

function LoginModal({
  selectedPlan,
  onClose,
}: {
  selectedPlan: Plan | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111f]/80 px-4 py-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/14 bg-[#0b1423] shadow-2xl shadow-black/40"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-highlight/10 blur-3xl" />

        <div className="relative p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
                <LockKeyhole className="h-5 w-5 text-highlight" />
              </div>
              <h3 id="login-title" className="text-2xl font-semibold tracking-normal text-white">
                Login to continue
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Sign in to activate the {selectedPlan?.name ?? "selected"} plan and continue checkout.
              </p>
            </div>

            <button
              type="button"
              aria-label="Close login window"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 transition hover:bg-white/12 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {selectedPlan && (
            <div className="mt-6 rounded-2xl border border-sky-300/20 bg-sky-300/[0.07] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-sky-100">{selectedPlan.name} plan</span>
                <span className="text-lg font-bold text-white">{selectedPlan.price}</span>
              </div>
            </div>
          )}

          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white/85">Email</span>
              <span className="relative block">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/12 bg-black/30 px-10 py-3 text-sm text-white outline-none transition placeholder:text-muted/65 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-white/85">Password</span>
              <span className="relative block">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/12 bg-black/30 px-10 py-3 text-sm text-white outline-none transition placeholder:text-muted/65 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
                />
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f] shadow-xl shadow-sky-950/25 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              Login
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-highlight" />
            Secure checkout starts after login
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PricingList() {
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);

  return (
    <section id="pricing" className="relative mt-24 overflow-hidden">
      <Container>
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-medium text-sky-100">
              Simple pricing
            </span>
            <h2 className="section-title mt-4">Choose your training plan</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Unlock premium workouts, advanced 3D muscle guidance, and a polished training experience built for steady progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition duration-300 ${
                plan.featured
                  ? "border-sky-300/35 bg-white/[0.09] shadow-2xl shadow-sky-950/35"
                  : "border-white/12 bg-white/[0.055] hover:border-sky-300/30 hover:bg-white/[0.075]"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-accent/12 blur-3xl transition group-hover:bg-highlight/18" />

              <div className="relative flex min-h-[390px] flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-normal text-white">{plan.name}</h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-muted">{plan.desc}</p>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-highlight/25 bg-highlight/12 px-3 py-1 text-xs font-semibold text-emerald-100">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-7">
                  <div className="text-sm text-muted line-through">{plan.oldPrice}</div>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-normal text-white">{plan.price}</span>
                    <span className="pb-1 text-sm text-muted">/ plan</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <ul className="space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-sky-50/90">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                  className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-[#07111f] shadow-xl shadow-sky-950/25 hover:-translate-y-0.5 hover:bg-sky-100"
                      : "border border-white/12 bg-white/[0.06] text-white hover:-translate-y-0.5 hover:bg-white/12"
                  }`}
                >
                  Choose
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedPlan && (
          <LoginModal selectedPlan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Pricing() {
  return <PricingList />;
}

"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Container from "../components/layout/Container";
import SignupModal from "./SignupModal";

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

function PricingList() {
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);

  return (
    <section id="pricing" className="relative mt-24 overflow-hidden">
      <Container>
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-medium text-sky-700">
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
              whileHover={{ y: -8, scale: plan.featured ? 1.018 : 1.012 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition duration-300 ${
                plan.featured
                  ? "border-sky-300 bg-sky-50 shadow-2xl shadow-sky-200/70"
                  : "border-border bg-card hover:border-sky-300 hover:bg-white"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
              <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-accent/12 blur-3xl transition group-hover:bg-highlight/18" />
              <div className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />

              <div className="relative flex min-h-[390px] flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-normal text-foreground">{plan.name}</h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-muted">{plan.desc}</p>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-highlight/25 bg-highlight/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-7">
                  <div className="text-sm text-muted line-through">{plan.oldPrice}</div>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-normal text-foreground">{plan.price}</span>
                    <span className="pb-1 text-sm text-muted">/ plan</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-border" />

                <ul className="space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-muted">
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
                      ? "premium-shine bg-accent text-white shadow-xl shadow-sky-500/20 hover:-translate-y-0.5 hover:bg-sky-700"
                      : "border border-border bg-white text-foreground hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50"
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
          <SignupModal selectedPlan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Pricing() {
  return <PricingList />;
}

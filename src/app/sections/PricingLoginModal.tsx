"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck, X } from "lucide-react";

type PricingLoginPlan = {
  name: string;
  price: string;
};

type PricingLoginModalProps = {
  selectedPlan: PricingLoginPlan | null;
  onClose: () => void;
};

export default function PricingLoginModal({
  selectedPlan,
  onClose,
}: PricingLoginModalProps) {
  const description = selectedPlan
    ? `Sign in to activate the ${selectedPlan.name} plan and continue checkout.`
    : "Sign in to access your SynerMuscle account.";
  const securityMessage = selectedPlan
    ? "Secure checkout starts after login"
    : "Your account stays protected";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4 py-6 backdrop-blur-xl"
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
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-slate-900/20"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-highlight/10 blur-3xl" />

        <div className="relative p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
                <LockKeyhole className="h-5 w-5 text-highlight" />
              </div>
              <h3 id="login-title" className="text-2xl font-semibold tracking-normal text-foreground">
                Login to continue
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {description}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close login window"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-slate-50 text-muted transition hover:bg-slate-100 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {selectedPlan && (
            <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-sky-700">{selectedPlan.name} plan</span>
                <span className="text-lg font-bold text-foreground">{selectedPlan.price}</span>
              </div>
            </div>
          )}

          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Email</span>
              <span className="relative block">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-slate-50 px-10 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/65 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Password</span>
              <span className="relative block">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-border bg-slate-50 px-10 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/65 focus:border-accent/70 focus:ring-2 focus:ring-accent/20"
                />
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Login
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-highlight" />
            {securityMessage}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function SignupForm() {
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
            className="w-full rounded-xl border border-border bg-slate-50 px-9 py-3 text-sm outline-none ring-0 transition placeholder:text-muted/70 focus:border-accent/60 focus:shadow-glow disabled:opacity-50"
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

"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Trash2 } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[900px]">{children}</div>;
}

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen px-4 py-10 sm:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="space-y-8 text-sm sm:text-base text-muted leading-relaxed">
            <Section title="1. Introduction">
              <p>
                Welcome to SynerMuscle. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our 
                mobile application and website.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email address (when you sign up for early access or newsletter)</li>
                <li>Usage data (how you interact with the app)</li>
                <li>Device information (device type, operating system)</li>
                <li>Workout preferences and fitness goals</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and improve our services</li>
                <li>Send you updates about early access and new features</li>
                <li>Personalize your workout experience</li>
                <li>Analyze app usage to enhance performance</li>
                <li>Communicate with you about your account</li>
              </ul>
            </Section>

            <Section title="4. Data Storage and Security">
              <p>
                Your data is stored securely on protected servers. We implement appropriate technical and 
                organizational measures to protect your personal data against unauthorized access, alteration, 
                disclosure, or destruction.
              </p>
            </Section>

            <Section title="5. Third-Party Services">
              <p>
                We may use third-party services for analytics and app functionality. These services have their 
                own privacy policies and may collect information as specified in their respective policies.
              </p>
            </Section>

            <Section title="6. Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Object to data processing</li>
              </ul>
            </Section>

            {/* Delete Data Section - Highlighted */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/5 p-6"
            >
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="h-5 w-5 text-red-400" />
                  <h2 className="text-xl font-semibold text-foreground">7. Delete Your Data</h2>
                </div>
                <p className="mb-4">
                  You have the right to request the deletion of all your personal data from our systems. 
                  To request data deletion, please send an email to:
                </p>
                <a
                  href="mailto:support@synermuscle.com?subject=Data%20Deletion%20Request"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 transition"
                >
                  <Mail className="h-4 w-4" />
                  support@synermuscle.com
                </a>
                <p className="mt-4 text-xs text-muted">
                  Please include your registered email address in your request. We will process your deletion 
                  request within 30 days and confirm once your data has been removed.
                </p>
              </div>
            </motion.div>

            <Section title="8. Cookies">
              <p>
                Our website may use cookies to enhance your browsing experience. You can control cookie 
                preferences through your browser settings.
              </p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <a
                href="mailto:support@synermuscle.com"
                className="inline-flex items-center gap-2 mt-2 text-accent hover:text-accent/80 transition"
              >
                <Mail className="h-4 w-4" />
                support@synermuscle.com
              </a>
            </Section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted">
            © {new Date().getFullYear()} SynerMuscle. All rights reserved.
          </div>
        </motion.div>
      </Container>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-3">{title}</h2>
      {children}
    </section>
  );
}


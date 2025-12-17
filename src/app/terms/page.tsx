"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[900px]">{children}</div>;
}

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-muted text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="space-y-8 text-sm sm:text-base text-muted leading-relaxed">
            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using the SynerMuscle mobile application ("App"), you agree to be 
                bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                SynerMuscle is a fitness application based on "Synergistic Muscle Training" methodology by Klaus Arndt. 
                The App provides customized workout plans, 3D exercise visualizations, and fitness tracking features 
                for users of all genders and skill levels.
              </p>
            </Section>

            <Section title="3. User Accounts">
              <p>To use certain features of the App, you may need to create an account. You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </Section>

            <Section title="4. Subscription and Payments">
              <p>
                Some features of the App may require a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pay all applicable fees as described in the App</li>
                <li>Automatic renewal unless cancelled before the renewal date</li>
                <li>Cancellation policies as specified in your app store</li>
              </ul>
            </Section>

            <Section title="5. User Conduct">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Copy, modify, or distribute App content without permission</li>
                <li>Use the App to transmit harmful or malicious content</li>
              </ul>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content in the App, including but not limited to text, graphics, logos, 3D models, videos, 
                and software, is the property of SynerMuscle or its licensors and is protected by intellectual 
                property laws. The "Synergistic Muscle Training" methodology is used under license from the 
                original creators.
              </p>
            </Section>

            <Section title="7. Health Disclaimer">
              <p className="font-medium text-foreground">
                IMPORTANT: The App is intended for informational and educational purposes only.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The App does not provide medical advice</li>
                <li>Consult a healthcare professional before starting any exercise program</li>
                <li>You exercise at your own risk</li>
                <li>We are not responsible for any injuries resulting from use of the App</li>
                <li>Stop exercising immediately if you experience pain or discomfort</li>
              </ul>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, SynerMuscle shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of 
                profits, data, or other intangible losses, resulting from your use of the App.
              </p>
            </Section>

            <Section title="9. Indemnification">
              <p>
                You agree to indemnify and hold harmless SynerMuscle, its affiliates, officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses arising from your use 
                of the App or violation of these Terms.
              </p>
            </Section>

            <Section title="10. Modifications to Service">
              <p>
                We reserve the right to modify, suspend, or discontinue the App or any part thereof at any 
                time without prior notice. We shall not be liable to you or any third party for any such 
                modification, suspension, or discontinuation.
              </p>
            </Section>

            <Section title="11. Termination">
              <p>
                We may terminate or suspend your access to the App immediately, without prior notice, for 
                any reason, including breach of these Terms. Upon termination, your right to use the App 
                will cease immediately.
              </p>
            </Section>

            <Section title="12. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which SynerMuscle operates, without regard to its conflict of law provisions.
              </p>
            </Section>

            <Section title="13. Changes to Terms">
              <p>
                We reserve the right to update these Terms at any time. We will notify you of any changes by 
                posting the new Terms on this page. Your continued use of the App after any changes constitutes 
                acceptance of the new Terms.
              </p>
            </Section>

            <Section title="14. Contact Us">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
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


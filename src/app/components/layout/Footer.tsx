import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 -mx-4 overflow-hidden bg-slate-100 text-slate-900 sm:-mx-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="mx-auto w-full max-w-[1100px] px-4 py-10 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.2fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/favicon.ico"
                alt="SynerMuscle Logo"
                className="h-11 w-11 rounded-2xl bg-white object-contain p-1 ring-1 ring-slate-200"
              />
              <span className="text-lg font-semibold tracking-normal">
                SynerMuscle
              </span>
            </Link>

            <p className="mt-4 max-w-[50ch] text-sm leading-6 text-slate-600">
              Premium fitness guidance powered by synergistic muscle training,
              personalized workouts, and advanced 3D exercise content.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-highlight" />
                Personalized workouts
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2">
                <CheckCircle2 className="h-4 w-4 text-highlight" />
                Advanced 3D content
              </span>
            </div>

          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-950">Features</h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link className="transition hover:text-slate-950" href="/#features">
                  Smart training
                </Link>
                <Link className="transition hover:text-slate-950" href="/#preview">
                  3D preview
                </Link>
                <Link className="transition hover:text-slate-950" href="/#pricing">
                  Plans
                </Link>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-950">Goals</h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <span>Build strength</span>
                <span>Improve form</span>
                <span>Stay consistent</span>
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-950">More</h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link className="transition hover:text-slate-950" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="transition hover:text-slate-950" href="/terms">
                  Terms and Conditions
                </Link>
                <a
                  className="inline-flex items-center gap-2 transition hover:text-slate-950"
                  href="mailto:support@synermuscle.com"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-300 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} SynerMuscle. All rights reserved.</p>
          <p>Built for focused training, better form, and measurable progress.</p>
        </div>
      </div>
    </footer>
  );
}

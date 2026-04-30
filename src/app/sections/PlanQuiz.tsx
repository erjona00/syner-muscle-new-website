"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";

type Step =
  | "age"
  | "goal"
  | "level"
  | "focus"
  | "frequency"
  | "duration"
  | "equipment"
  | "barrier"
  | "done";

type PlanAnswers = {
  age: string;
  goal: string;
  level: string;
  focus: string;
  frequency: string;
  duration: string;
  equipment: string;
  barrier: string;
};

const ageOptions = [
  { label: "18-29", image: "/first.jpg" },
  { label: "30-39", image: "/second.jpg" },
  { label: "40-49", image: "/third.jpg" },
  { label: "50+", image: "/fourth.jpg" },
];

const goalOptions = [
  "Build muscle",
  "Lose fat",
  "Improve mobility",
  "Train consistently",
];

const levelOptions = ["Beginner", "Intermediate", "Advanced"];
const focusOptions = ["Full body", "Upper body", "Core strength", "Legs and glutes"];
const frequencyOptions = ["2 days/week", "3 days/week", "4 days/week", "5+ days/week"];
const durationOptions = ["10-15 min", "20-30 min", "35-45 min", "60 min"];
const equipmentOptions = [
  "No equipment",
  "Dumbbells",
  "Resistance bands",
  "Full gym access",
];
const barrierOptions = [
  "Lack of time",
  "Low motivation",
  "Not sure what to do",
  "Plateau or slow progress",
];

const stepOrder: Step[] = [
  "age",
  "goal",
  "level",
  "focus",
  "frequency",
  "duration",
  "equipment",
  "barrier",
];

const stepContent: Record<
  Exclude<Step, "age" | "done">,
  {
    kicker: string;
    title: string;
    subtitle: string;
    options: string[];
    field: keyof PlanAnswers;
  }
> = {
  goal: {
    kicker: "Personalization",
    title: "What is your main goal?",
    subtitle: "Choose the result you want SynerMuscle to focus on first.",
    options: goalOptions,
    field: "goal",
  },
  level: {
    kicker: "Training level",
    title: "How would you describe yourself?",
    subtitle: "Your plan should match your current strength and confidence.",
    options: levelOptions,
    field: "level",
  },
  focus: {
    kicker: "Body focus",
    title: "Where do you want the most progress?",
    subtitle: "This helps prioritize your first training blocks.",
    options: focusOptions,
    field: "focus",
  },
  frequency: {
    kicker: "Weekly rhythm",
    title: "How often can you train?",
    subtitle: "Pick a schedule you can actually keep.",
    options: frequencyOptions,
    field: "frequency",
  },
  duration: {
    kicker: "Session length",
    title: "How much time do you have?",
    subtitle: "Short workouts can still work when the plan is focused.",
    options: durationOptions,
    field: "duration",
  },
  equipment: {
    kicker: "Setup",
    title: "What equipment do you have?",
    subtitle: "SynerMuscle can adapt the workout style around your setup.",
    options: equipmentOptions,
    field: "equipment",
  },
  barrier: {
    kicker: "Challenge",
    title: "What usually holds you back?",
    subtitle: "We will shape the plan around the thing most likely to stop you.",
    options: barrierOptions,
    field: "barrier",
  },
};

export default function PlanQuiz() {
  const [step, setStep] = React.useState<Step>("age");
  const [answers, setAnswers] = React.useState<PlanAnswers>({
    age: "",
    goal: "",
    level: "",
    focus: "",
    frequency: "",
    duration: "",
    equipment: "",
    barrier: "",
  });
  const currentStepIndex = Math.max(0, stepOrder.indexOf(step));
  const progress =
    step === "done"
      ? 100
      : Math.round(((currentStepIndex + 1) / stepOrder.length) * 100);
  const plan = buildPlanSummary(answers);

  const updateAnswer = (field: keyof PlanAnswers, value: string) => {
    setAnswers((current) => ({ ...current, [field]: value }));
    if (step === "barrier") {
      setStep("done");
      return;
    }

    goNext();
  };

  const goNext = () => {
    const next = stepOrder[currentStepIndex + 1];
    if (next) setStep(next);
  };

  const goBack = () => {
    const previous = stepOrder[currentStepIndex - 1];
    if (previous) setStep(previous);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-6 text-white sm:px-6">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/first.jpg"
        aria-hidden="true"
      >
        <source src="/quiz-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/68" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/35 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[480px] flex-col">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>

          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <img
              src="/favicon.ico"
              alt="SynerMuscle"
              className="h-8 w-8 rounded-md bg-white ring-1 ring-white/35"
            />
            SynerMuscle
          </Link>

          <div className="w-10" />
        </header>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <section className="flex flex-1 flex-col justify-center py-8">
          {step === "age" && (
            <>
              <QuizIntro
                kicker="1-minute quiz"
                title="Build your SynerMuscle workout plan"
                subtitle="Based on your answers"
              />

              <div className="mt-7 grid gap-3">
                {ageOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => updateAnswer("age", option.label)}
                    className="group flex min-h-[92px] items-center overflow-hidden rounded-lg border border-white/25 bg-white/90 text-left text-foreground shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-white"
                  >
                    <div className="relative h-[92px] w-[112px] shrink-0 overflow-hidden bg-slate-200">
                      <Image
                        src={option.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between px-4">
                      <span className="text-lg font-bold">Age: {option.label}</span>
                      <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-accent" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {isChoiceStep(step) && (
            <>
              <QuizIntro
                kicker={stepContent[step].kicker}
                title={stepContent[step].title}
                subtitle={stepContent[step].subtitle}
              />

              <ChoiceGrid
                options={stepContent[step].options}
                selected={answers[stepContent[step].field]}
                onSelect={(value) => updateAnswer(stepContent[step].field, value)}
              />
            </>
          )}

          {step === "done" && (
            <ResultCard answers={answers} plan={plan} />
          )}
        </section>

        {step !== "age" && step !== "done" && (
          <button
            type="button"
            onClick={goBack}
            className="mb-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}

        <p className="pb-5 text-center text-xs leading-5 text-white/75">
          By continuing you agree to our{" "}
          <Link href="/terms" className="font-semibold text-white underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-white underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

function isChoiceStep(
  step: Step,
): step is Exclude<Step, "age" | "done"> {
  return step in stepContent;
}

function QuizIntro({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
        {kicker}
      </p>
      <h1 className="mt-3 text-balance text-3xl font-extrabold uppercase leading-[1.02] tracking-normal text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-sm font-semibold uppercase tracking-normal text-white/78 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

function ChoiceGrid({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="mt-7 grid gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className="flex min-h-[64px] items-center justify-between rounded-lg border border-white/25 bg-white/90 px-5 text-left text-base font-bold text-foreground shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:bg-white sm:text-lg"
        >
          {option}
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
              selected === option
                ? "border-accent bg-accent text-white"
                : "border-slate-300 text-transparent"
            }`}
          >
            <Check className="h-4 w-4" />
          </span>
        </button>
      ))}
    </div>
  );
}

function ResultCard({
  answers,
  plan,
}: {
  answers: PlanAnswers;
  plan: ReturnType<typeof buildPlanSummary>;
}) {
  return (
    <div className="rounded-lg border border-white/25 bg-white/95 p-5 text-foreground shadow-2xl shadow-black/25 backdrop-blur-md sm:p-6">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-highlight">
        <Check className="h-7 w-7" />
      </div>

      <div className="mt-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Your result
        </p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase leading-tight tracking-normal">
          {plan.planType}
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted">{plan.result}</p>
      </div>

      <div className="mt-5 grid gap-3">
        {plan.recommendations.map((item) => (
          <div key={item.title} className="flex gap-3 rounded-lg bg-slate-50 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
              {item.icon}
            </div>
            <div>
              <strong className="block text-sm">{item.title}</strong>
              <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
        <strong className="block text-sm">Profile summary</strong>
        <div className="mt-3 grid gap-2 text-sm">
          <SummaryRow label="Age" value={answers.age} />
          <SummaryRow label="Level" value={answers.level} />
          <SummaryRow label="Goal" value={answers.goal} />
          <SummaryRow label="Schedule" value={`${answers.frequency}, ${answers.duration}`} />
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <Link
          href="/download"
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-base font-bold text-white transition hover:bg-sky-700"
        >
          Download app to continue
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted">{label}</span>
      <span className="text-right font-semibold text-foreground">{value || "-"}</span>
    </div>
  );
}

function buildPlanSummary(answers: PlanAnswers) {
  const isStrength =
    answers.goal === "Build muscle" ||
    answers.focus === "Upper body" ||
    answers.focus === "Core strength";
  const isConsistency =
    answers.goal === "Train consistently" ||
    answers.barrier === "Low motivation" ||
    answers.barrier === "Lack of time";
  const isMobility =
    answers.goal === "Improve mobility" || answers.focus === "Legs and glutes";

  const planType = isStrength
    ? "Strength Builder Plan"
    : isMobility
      ? "Mobility and Control Plan"
      : isConsistency
        ? "Consistency Starter Plan"
        : "Lean Progress Plan";

  const headline =
    answers.goal && answers.level
      ? `${answers.level} ${answers.goal.toLowerCase()} plan`
      : "Your personalized plan is ready";

  const summary = answers.frequency
    ? `${answers.frequency} with ${answers.duration || "focused sessions"}`
    : "Answer the last step to unlock your summary.";

  const result = `Based on your answers, your best next step is a ${planType.toLowerCase()} with ${answers.frequency || "a realistic weekly rhythm"} and ${answers.duration || "focused sessions"}. The app will help you keep the workouts structured, track progress, and unlock the upgraded plan when you are ready for more guidance.`;

  return {
    headline,
    summary,
    planType,
    result,
    recommendations: [
      {
        title: "Training structure",
        text: `${answers.frequency || "Consistent weekly training"} with ${answers.duration || "short focused workouts"} is the right starting pace for your profile.`,
        icon: <Clock3 className="h-4 w-4" />,
      },
      {
        title: "Primary focus",
        text: `${answers.focus || "Full body"} work should support your goal to ${answers.goal ? answers.goal.toLowerCase() : "make steady progress"}.`,
        icon: <Dumbbell className="h-4 w-4" />,
      },
      {
        title: "Upgrade reason",
        text: `${answers.barrier || "Your main challenge"} is exactly where app guidance, reminders, and upgraded tracking can help you continue.`,
        icon: <ShieldCheck className="h-4 w-4" />,
      },
    ],
  };
}

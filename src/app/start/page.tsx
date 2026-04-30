import type { Metadata } from "next";
import PlanQuiz from "../sections/PlanQuiz";

export const metadata: Metadata = {
  title: "Start Your SynerMuscle Plan",
  description: "Create a personalized SynerMuscle workout plan in a short quiz.",
};

export default function StartPage() {
  return <PlanQuiz />;
}

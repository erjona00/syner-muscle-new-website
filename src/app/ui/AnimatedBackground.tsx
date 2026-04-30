"use client";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#ffffff_100%)]" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
    </div>
  );
}

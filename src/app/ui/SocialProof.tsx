import Image from "next/image";

export default function SocialProof({ className = "" }: { className?: string }) {
  const avatars = [1, 2, 3, 4, 5, 6].map((i) => `https://i.pravatar.cc/64?img=${i}`);
  return (
    <div className={`flex items-center gap-3 rounded-2xl border border-border bg-white/80 p-3 shadow-sm shadow-slate-200/80 backdrop-blur-xl ${className}`}>
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <Image key={src} src={src} alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-white" />
        ))}
      </div>
      <div className="text-xs text-muted">
        <span className="text-foreground">300k+</span> creators and athletes follow SynerMuscle
      </div>
    </div>
  );
}

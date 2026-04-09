import Image from "next/image";

export default function SocialProof({ className = "" }: { className?: string }) {
  const avatars = [1, 2, 3, 4, 5, 6].map((i) => `https://i.pravatar.cc/64?img=${i}`);
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <Image key={src} src={src} alt="avatar" width={28} height={28} className="rounded-full ring-2 ring-card" />
        ))}
      </div>
      <div className="text-xs text-muted">
        <span className="text-foreground">300k+</span> creators and athletes follow SynerMuscle
      </div>
    </div>
  );
}
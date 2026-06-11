import { useEffect } from "react";
import profileImage from "../assets/Ved_Sharanagate.jpg";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#FDFDFD] flex flex-col items-center justify-center gap-8 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,24,39,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,87,34,0.25) 0%, rgba(255,87,34,0) 70%)",
        }}
      />

      <div
        className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] overflow-hidden rounded-full border-[3px] border-[#FF5722] bg-[#E5E7EB]"
        style={{ boxShadow: "0 0 60px rgba(255,87,34,0.4)" }}
      >
        <img
          src={profileImage}
          alt="Ved Sharanagate"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-[#111827] inline-flex items-center whitespace-nowrap">
        Ved Sharanagate<span className="text-[#FF5722]">.</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] pulse-dot" />
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#4B5563]">
          Loading portfolio
        </span>
      </div>
    </div>
  );
}

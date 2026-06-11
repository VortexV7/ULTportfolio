import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative animated background. Cheap to paint:
 * - static dotted grid (no animation)
 * - two transform-only floating blobs (GPU-composited)
 * Respects prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* dotted grid — static, painted once */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(17,24,39,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="absolute -top-24 -left-20 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,87,34,0.28) 0%, rgba(255,87,34,0) 70%)",
          willChange: "transform",
        }}
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)",
          willChange: "transform",
        }}
        animate={reduce ? undefined : { x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

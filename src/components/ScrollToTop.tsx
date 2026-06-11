import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating scroll-to-top button with a circular progress ring. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[55] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121212] text-white grid place-items-center cursor-pointer shadow-[0_10px_30px_rgba(255,87,34,0.35)]"
        >
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 56 56"
            fill="none"
          >
            <circle cx="28" cy="28" r={R} stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
            <motion.circle
              cx="28"
              cy="28"
              r={R}
              stroke="#FF5722"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={C}
              style={{
                pathLength: progress,
              }}
            />
          </svg>
          <ArrowUp size={18} className="relative" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

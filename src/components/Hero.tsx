import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import profileImage from "../assets/Ved_Sharanagate.jpg";

const roles = ["Computer Engineering Student", "AI Enthusiast", "Full Stack Developer", "Vibe Coder"];

function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero({ splash = false }: { splash?: boolean }) {
  const typed = useTypewriter();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Transform-only parallax (no opacity, no layout) → cheap to composite.
  const heroY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-5 sm:px-6 overflow-hidden"
    >
      <AnimatedBackground />

      <motion.div
        style={{ y: heroY, willChange: "transform" }}
        className="relative max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-10 md:gap-12 items-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-3 text-center md:text-left"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-center md:justify-start gap-2 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
              Available for opportunities
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#111827] break-words"
          >
            Ved Sharanagate
          </motion.h1>
          <motion.div
            variants={item}
            className="mt-4 min-h-[2.25rem] font-sans text-xl sm:text-2xl md:text-3xl text-[#FF5722] font-medium"
          >
            {typed}
            <span className="inline-block w-[2px] h-6 sm:h-7 ml-1 bg-[#FF5722] align-middle animate-pulse" />
          </motion.div>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl mx-auto md:mx-0 font-serif text-base sm:text-lg text-[#4B5563]"
          >
            Building AI-powered applications with Python and modern web technologies. 
            Currently exploring machine learning, software engineering, 
            and the art of creating useful digital experiences.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#FF5722] text-white font-sans font-medium px-5 py-3 rounded-lg hover:bg-[#E64A19] transition-colors cursor-pointer"
            >
              <Download size={16} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 border border-[#FF5722] text-[#FF5722] font-sans font-medium px-5 py-3 rounded-lg hover:bg-[#FF5722] hover:text-white transition-colors cursor-pointer"
            >
              <Mail size={16} /> Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px]"
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#FF5722]/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              layoutId="brand-avatar"
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-2 overflow-hidden rounded-full border-[3px] border-[#FF5722] bg-[#E5E7EB]"
              style={{ boxShadow: "0 0 60px rgba(255,87,34,0.35)" }}
            >
              <img
                src={profileImage}
                alt="Ved Sharanagate"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#4B5563] bounce-down cursor-pointer"
        aria-label="scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}

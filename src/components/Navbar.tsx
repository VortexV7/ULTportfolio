import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ splash: _splash = false }: { splash?: boolean }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    let observer: IntersectionObserver;
    let retryTimer: ReturnType<typeof setTimeout>;

    const setupObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(e.target.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      let observedCount = 0;
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) { observer.observe(el); observedCount++; }
      });

      if (observedCount === 0) {
        retryTimer = setTimeout(setupObserver, 500);
      }
    };

    setupObserver();
    return () => { observer?.disconnect(); clearTimeout(retryTimer); };
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="font-sans font-bold text-base sm:text-lg text-[#111827] cursor-pointer"
          >
            Ved Sharanagate<span className="text-[#FF5722]">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollTo(l.id)}
                className={`font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  active === l.id ? "text-[#FF5722]" : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hamburger — sits above the overlay via z-[60] */}
          <button
            type="button"
            className="md:hidden z-[60] relative text-[#111827] cursor-pointer p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] md:hidden bg-white flex flex-col"
          >
            {/* Top accent line */}
            <div className="h-1 w-full bg-[#FF5722]" />

            {/* Content */}
            <div className="flex flex-col flex-1 justify-center px-10">
              {/* Nav items */}
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.3, ease: "easeOut" }}
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(l.id)}
                      className="group w-full text-left flex items-center gap-4 py-4 border-b border-[#F3F4F6] cursor-pointer"
                    >
                      {/* Index number */}
                      <span className="font-mono text-[10px] text-[#D1D5DB] w-5 shrink-0 group-hover:text-[#FF5722] transition-colors">
                        0{i + 1}
                      </span>

                      {/* Label */}
                      <span
                        className={`font-sans text-3xl font-bold tracking-tight transition-colors ${
                          active === l.id
                            ? "text-[#FF5722]"
                            : "text-[#111827] group-hover:text-[#FF5722]"
                        }`}
                      >
                        {l.label}
                      </span>

                      {/* Active dot */}
                      {active === l.id && (
                        <motion.span
                          layoutId="active-dot"
                          className="ml-auto w-2 h-2 rounded-full bg-[#FF5722] shrink-0"
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer brand watermark */}
            <div className="px-10 py-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#D1D5DB]">
                Ved Sharanagate<span className="text-[#FF5722]">.</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
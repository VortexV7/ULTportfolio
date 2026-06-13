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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-sans font-bold text-base sm:text-lg flex items-center text-[#111827] truncate"
        >
          <motion.span
            layoutId="brand-name"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center whitespace-nowrap"
          >
            Ved Sharanagate<span className="text-[#FF5722]">.</span>
          </motion.span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                active === l.id ? "text-[#FF5722]" : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-[#111827]" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[#E5E7EB] bg-white"
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left font-mono text-xs uppercase tracking-wider py-3 px-3 rounded-md transition-colors active:bg-[#FF5722]/10 ${
                    active === l.id ? "text-[#FF5722] bg-[#FF5722]/5" : "text-[#4B5563] hover:text-[#111827] hover:bg-gray-100"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

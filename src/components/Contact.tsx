import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Mail, label: "hydro.ved5@gmail.com", href: "mailto:hydro.ved5@gmail.com" },
  { icon: Github, label: "github.com/vortexV7", href: "https://github.com/vortexV7" },
  { icon: Linkedin, label: "linkedin.com/in/ved-sharanagate", href: "https://linkedin.com/in/ved-sharanagate" },
];

export default function Contact() {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!formspreeEndpoint) {
      event.preventDefault();
      window.alert("Set VITE_FORMSPREE_ENDPOINT to enable the contact form.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-5 sm:px-6 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-400">Contact</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-white">Let's build something together</h2>
          <p className="mt-6 font-serif text-lg text-gray-400 max-w-md">
            Open to internships, collaborations, and freelance projects. Drop me a line — I usually reply within a day.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex items-center gap-3 text-gray-300 hover:text-[#FF5722] transition-all duration-200 hover:translate-x-1"
              >
                <s.icon size={18} />
                <span className="font-mono text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          action={formspreeEndpoint}
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                className="bg-[#1e1e1e] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF5722] font-serif"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="bg-[#1e1e1e] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF5722] font-serif"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Message</label>
            <textarea
              rows={4}
              name="message"
              required
              className="bg-[#1e1e1e] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF5722] font-serif resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF5722] text-white font-sans font-medium py-3 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

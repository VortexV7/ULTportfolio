import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ved's Portfolio" },
      { name: "description", content: "Personal portfolio of Ved Sharanagate — a Computer Engineering student building at the intersection of ML and full-stack development." },
      { property: "og:title", content: "Ved Sharanagate — Portfolio" },
      { property: "og:description", content: "Projects, skills, and achievements of a Computer Engineering student passionate about software craft." },
    ],
  }),
  component: Index,
});

function Index() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    if (splash) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [splash]);

  if (splash) {
    return <SplashScreen onDone={() => setSplash(false)} />;
  }

  return (
    <main className="bg-[#FDFDFD] text-[#111827] overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

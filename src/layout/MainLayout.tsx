import { useEffect, useState } from "react";
import Particles from "../components/Particles";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);



  return (
    <div className="relative" style={{ minHeight: "100dvh", isolation: "isolate" }}>
      {/* фоновые частицы остаются позади */}
      <Particles
        className="global-particles"
        particleColors={theme === "light" ? ["#000000", "#000000"] : ["#ffffff", "#ffffff"]}
        particleCount={250}
        particleSpread={12}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="relative" style={{ zIndex: 1 }}>
        <SiteHeader/>
        <main className="container" style={{ padding: "24px 0 40px" }}>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

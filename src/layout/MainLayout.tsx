import { useEffect, useState } from "react";
import Particles from "../components/Particles";
// import PillNav from "../components/PillNav";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const location = useLocation();

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  };

  return (
    <div className="layout-container" style={{ position: "relative", zIndex: 1 }}>
      <Particles className="global-particles" 
          particleColors={theme === "light" ? ['#000000', '#000000'] : ['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}/>
          {/* <PillNav
            logo={"./amanita.png"}
            logoAlt="Amanita logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Projects', href: '/projects' },
              { label: 'Contact', href: '/contact' }
            ]}
             activeHref={location.pathname}
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          /> */}
      <main className="site-main" style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <footer className="site-footer" style={{ position: 'relative', zIndex: 1 }}>© {new Date().getFullYear()} Amanita</footer>
    </div>
  );
}

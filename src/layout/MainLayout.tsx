import { useEffect, useState } from "react";
import Particles from "../components/Particles";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
    <div className="layout-container" style={{ position: "relative" }}>
      <Particles className="global-particles" 
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}/>
      <header className="site-header">
        <div className="brand">
          <Link to="/" className="brand-link">Amanita</Link>
        </div>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
          <button className="button" aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Amanita</footer>
    </div>
  );
}

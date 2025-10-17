import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Блокируем скролл, когда меню открыто (только мобилка)
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <div className="site-header-wrap">
      <div className="site-header glass">
        <div className="container site-header-inner">
          {/* Бренд */}
          <div className="brand">
            <span className="brand-dot" />
            <span>Amanita</span>
          </div>

          {/* Нав — десктоп */}
          <nav className="nav">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Экшены */}
          <div className="header-actions">
            <a
              href="https://github.com/amanita1"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            {/* Бургер */}
            <button
              className="mobile-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-panel"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      </div>
      <div className="header-glow" />

      {/* Мобильное меню — рендерится только когда open === true */}
      {open && (
        <div id="mobile-panel" className="mobile-panel open">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `mobile-link${isActive ? " active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

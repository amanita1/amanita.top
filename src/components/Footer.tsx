import { Link } from "react-router-dom";
export default function SiteFooter() {
    return (
      <div>
        <div className="footer-glow " />
        <footer className="site-footer glass">
          <div className="container site-footer-inner">
            <div>© {new Date().getFullYear()} Amanita</div>
            <div className="footer-links">
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
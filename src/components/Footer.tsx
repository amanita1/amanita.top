export default function SiteFooter() {
    return (
      <div>
        <div className="footer-glow " />
        <footer className="site-footer glass">
          <div className="container site-footer-inner">
            <div>© {new Date().getFullYear()} Amanita</div>
            <div className="footer-links">
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
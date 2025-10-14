type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    description: "This site. Built with React 19 + Vite, minimal CSS, accessible UI.",
    link: "https://amanita.top",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    title: "UI Components",
    description: "A small collection of reusable, accessible components.",
    link: "https://github.com/amanita/ui-components",
    tags: ["Design System", "A11y"],
  },

  {
    title: "Telecleaner",
    description: "Multitool for Telegram",
    link: "",
    tags: ["Python", "Telegram", "FullStack"],
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="section-title">Projects</h1>
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title} className="project-card">
            <h2 className="project-title">{p.title}</h2>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <a className="button" href={p.link} target="_blank" rel="noreferrer">Visit</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

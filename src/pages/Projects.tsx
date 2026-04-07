type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  buttonEnabled: boolean; 
  wip: boolean,
  mvp?: boolean;
  buttonVisible: Boolean;
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    description: "This site. Built with React 19 + Vite, minimal CSS, accessible UI.",
    link: "https://amanita.top",
    tags: ["React", "Vite", "TypeScript"],
    buttonEnabled: true,
    wip: false,
    buttonVisible: true,
  },
  {
    title: "Wishies",
    description: "Wishlist web-service and app.",
    link: "https://github.com/amanita1/FinTrackBot/",
    tags: ["FastApi", "React", "Vite", "TypeScript", "PostgreSQL"],
    buttonEnabled: true,
    wip: true,
    buttonVisible: true,
  },
  {
    title: "TooManyChats",
    description: "Multitool for Telegram. Currently used for cleaning up your chat list.",
    link: "https://toomanychats.amanita.top",
    tags: ["Python3","Telethon", "TelegramAPI", "Node.js", "React"],
    buttonEnabled: true,
    wip: true,
    buttonVisible: true,
    mvp: true
  },
  {
    title: "DnD ToolBox",
    description: "Dungerons and Dragons tool with lots of features. (Currenly only API realized)",
    link: "https://github.com/amanita1/",
    tags: ["Java", "SpringBoot", "JWT", "PostgreSQL", "Docker"],
    buttonEnabled: true,
    wip: true,
    buttonVisible: true,
  },
  {
    title: "Digital Decluttering",
    description: "Concept of Service for digital decluttering — emails, storage, subscriptions, and mental focus cleanup.",
    link: "https://github.com/amanita1/FinTrackBot/",
    tags: [],
    buttonEnabled: false, 
    wip: true,
    buttonVisible: true,
  },
  {
    title: "Soon!",
    description: "More exciting projects!",
    link: "https://github.com/amanita1/FinTrackBot/",
    tags: [],
    buttonEnabled: false, 
    wip: true,
    buttonVisible: false,
  },
];
export default function Projects() {
  return (
    <section className="container projects p-6" style={{ display:"grid", gap:24, marginBottom:50}} >
      <h1 className=" section-title text-3xl font-bold mb-6">Projects</h1>

      <ul className="project-grid grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.title}
            className=" glass project-card border border-neutral-800 bg-neutral-900 p-5 rounded-xl hover:border-neutral-700 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="project-title text-xl font-semibold">{p.title}</h2>

                <div className="flex gap-2">
                    {p.mvp && (
                        <span
                            title="Minimum Viable Product"
                            className="text-xs bg-green-500/10 text-green-400 rounded-md px-9 py-5"
                        >
      🚀 MVP
    </span>
                    )}
                    {p.wip && (
                        <span
                            title="Work in progress"
                            className="text-xs bg-yellow-500/10 text-yellow-400 rounded-md px-3 py-1"
                        >
      🧩 WIP
    </span>
                    )}
                </div>
            </div>

            <p className="project-desc text-sm text-neutral-400 mb-3">
              {p.description}
            </p>

            <div className="project-tags flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="tag text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.buttonVisible && (
              p.buttonEnabled && p.link ? (
                <a
                  className="inline-block button text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              ) : (
                <button
                  disabled
                  className="inline-block text-sm font-medium text-neutral-400 bg-neutral-800 cursor-not-allowed px-4 py-2 rounded-lg opacity-60"
                >
                  Coming soon
                </button>
              )
)}
          </li>
        ))}
      </ul>
    </section>
  );
}

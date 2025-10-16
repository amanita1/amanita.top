import { Download, Mail, Github, Linkedin } from "lucide-react";
type Skill = { name: string; level?: "basic" | "intermediate" | "advanced"; area?: string };

const skills: Skill[] = [
  // BE
  { name: "Java", level: "advanced", area: "Backend" },
  { name: "Spring Boot", level: "advanced", area: "Backend" },
  { name: "PostgreSQL", level: "intermediate", area: "DB" },
  { name: "MongoDB", level: "advanced", area: "DB" },
  { name: "Docker", level: "basic", area: "DevOps" },
  { name: "C#", level: "basic", area: "Backend" },
//   // FE
//   { name: "React", level: "advanced", area: "Frontend" },
//   { name: "TypeScript", level: "advanced", area: "Frontend" },
//   { name: "Vite", level: "advanced", area: "Frontend" },
  // Bots / Tools
  { name: "Python", level: "intermediate", area: "Bots" },
  { name: "Telegram Bot API", level: "intermediate", area: "Bots" },
  // GameDev / Misc
  { name: "Unity", level: "intermediate", area: "GameDev" },
  { name: "Unity Particle System", level: "intermediate", area: "GameDev" },
];

const levelColor: Record<NonNullable<Skill["level"]>, string> = {
  basic:    "#8a8f98",
  intermediate: "#4fb0ff",
  advanced: "#8fff6a",
};

export default function About() {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    const k = s.area ?? "Other";
    (acc[k] ||= []).push(s);
    return acc;
  }, {});

  return (
    <section className="container" style={{ display:"grid", gap:24 }}>

      <header style={{ display:"grid", gap:8 }}>
        <h1 style={{ fontSize:28, fontWeight:700 }}>About me</h1>
        <p style={{ color:"var(--muted)", maxWidth:800 }}>
          Hi! I'm Amanita — Software Engineer with 2 year expirience in GameDev.
          I make things that are convenient to use.
        </p>
      </header>

      <section aria-labelledby="skills-title" className="glass" style={{ borderRadius:16, padding:"18px 16px" }}>
        <h2 id="skills-title" style={{ fontSize:18, marginBottom:12, opacity:.9 }}>Skills</h2>

        <div style={{ display:"grid", gap:16 }}>
          {Object.entries(grouped).map(([area, list]) => (
            <div key={area} style={{ display:"grid", gap:10 }}>
              <div style={{ fontWeight:600, opacity:.85 }}>{area}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {list.map((s) => (
                  <span
                    key={s.name}
                    title={s.level ? `Level: ${s.level}` : undefined}
                    style={{
                      padding:"8px 10px",
                      borderRadius:10,
                      border:"1px solid var(--glass-border)",
                      color:"var(--fg)",
                      background:"linear-gradient(180deg, var(--glass-bg-1), var(--glass-bg-2))",
                      boxShadow:"var(--shadow)",
                      display:"inline-flex",
                      alignItems:"center",
                      gap:8
                    }}
                  >
                    <i style={{
                      display:"inline-block",
                      width:8, height:8, borderRadius:"50%",
                      background: s.level ? levelColor[s.level] : "var(--muted)",
                      boxShadow: s.level ? `0 0 10px ${levelColor[s.level]}` : "none"
                    }} />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass" style={{ borderRadius:16, padding:"18px 16px" }}>
        <h2 style={{ fontSize:18, marginBottom:8, opacity:.9 }}>Focus</h2>
        <ul style={{ color:"var(--muted)", display:"grid", gap:6, paddingLeft:18 }}>
          <li>Backend: Java 17/21, Spring Boot 3.x, REST, JWT, PostgreSQL</li>
          <li>DevOps: Docker, Local Development, CI on GitHub Actions</li>
          <li>GameDev: Unity + C#</li>
          <li>Bots/Automation: Telegram bots, Usefull tools</li>
        </ul>
      </section>
    </section>
  );
}

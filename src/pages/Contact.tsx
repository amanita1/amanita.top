import { Github, Send, Linkedin, Mail, MessageSquare } from "lucide-react";

type Social = {
  title: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    title: "GitHub",
    href: "https://github.com/amanita1",
    desc: "Code, Projects, Experiments.",
    icon: <Github size={18} />,
  },
  {
    title: "Telegram",
    href: "https://t.me/amanita_dev",
    desc: "The fastest way to communicate.",
    icon: <Send size={18} />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-rakhmetov-3189502b2/",
    desc: "Profile and Resume.",
    icon: <Linkedin size={18} />,
  },
  {
    title: "Email",
    href: "mailto:amanita.rar@gmail.com",
    desc: "Classic — Send me a mail.",
    icon: <Mail size={18} />,
  },
  {
    title: "Discord",
    href: "https://discordapp.com/users/3.1.3.3.7",
    desc: "Let's play together.",
    icon: <MessageSquare size={18} />,
  },
];

export default function Contact() {
  return (
    <section className="container" style={{ display: "grid", gap: 30 }}>


      <h1 style={{ fontSize:28, fontWeight:700 }}>Contact</h1>

      <div className="contact-content" style={{marginBottom: 120}}>
      <div className="cards-grid">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
            className="card social-card glass"
            aria-label={s.title}
          >
            <div className="social-card__icon">{s.icon}</div>
            <div className="social-card__body">
              <div className="social-card__title">{s.title}</div>
              <div className="social-card__desc">{s.desc}</div>
            </div>
          </a>
        ))}
      </div>

      <form
        className="glass contact-form"
        action="https://formspree.io/f/meornaow"
        method="POST"
      >
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" required placeholder="Hi Amanita…" rows={5} />
        </label>
        <button type="submit" className="btn btn--primary">Send</button>
      </form>
    </div>
    </section>
  );
}

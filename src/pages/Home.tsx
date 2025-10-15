
import ProfileCard from "../components/ProfileCard.jsx";

export default function Home() {
  return (
    <section className="hero" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap', paddingTop: 40 }}>
      <div style={{ maxWidth: 560, minWidth: 280 }}>
        <h1 className="hero-title">Hi, I’m Amanita 👋</h1>
        <p className="hero-subtitle">Software Engineer | Game-Designer.</p>
        <div className="hero-cta" style={{ marginTop: 12 }}>
          <a className="button primary" href="/projects">View Projects</a>
          <a className="button" href="mailto:hello@amanita.top">Contact</a>
        </div>
      </div>
      <div style={{ marginTop: 12, flex: '0 1 420px' }}>
        <ProfileCard
          style={{display: 'flex'}}
          className="profile-card"
          name="Amanita"
          title="Software Engineer | Game-Designer"
          handle="amanita"
          status="Online"
          contactText="Contact"
          avatarUrl="/amanita.png"
          miniAvatarUrl="/amanita.png"
          grainUrl = "/amanita.png"
          onContactClick={() => {
            window.location.href = "mailto:hello@amanita.top";
          }}
        />
      </div>
    </section>
  );
}

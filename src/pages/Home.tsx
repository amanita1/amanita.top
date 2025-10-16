
import ProfileCard from "../components/ProfileCard.jsx";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Hi, I’m Amanita</h1>
        <p className="hero-subtitle">Software Engineer | Game-Designer.</p>
        <div className="hero-cta" style={{ marginTop: 12 }}>
          <a className="btn glass btn--primary primary herobtn" href="/projects">View Projects</a>
          <a className="button glass herobtn" href="mailto:hello@amanita.top">Contact</a>
        </div>
      </div>
      <div className="hero-right" style={{ marginTop: 12 }}>
        <ProfileCard
          className="profile-card"
          name="Alexander Rakhmetov"
          title="Software Engineer | Game-Designer"
          handle="amanita1"
          status="Online"
          contactText="Contact"
          avatarUrl="/Me.png"
          miniAvatarUrl="/amanita.png"
          grainUrl = "/amanita.png"
          onContactClick={() => {
            window.location.href = "mailto:amanita.rar@gmail.com";
          }}
        />
      </div>
    </section>
  );
}

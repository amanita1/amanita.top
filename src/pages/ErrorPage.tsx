
export default function ErrorPage() {
  return (
    <section className="container" style={{ display:"grid", placeItems:"center", minHeight:"60vh", textAlign:"center", gap:320 }}>
      <div style={{ position:"relative" }}>
        <h1 style={{ fontSize:72, letterSpacing:2, margin:0 }}>404</h1>
        <div className="glitch" aria-hidden>404</div>
      </div>
      <p style={{ color:"var(--muted)" }}>Страница потерялась в мицелии 🍄</p>
      <a href="/" style={{ textDecoration:"none" }}>← На главную</a>
    </section>
  );
}

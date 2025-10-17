import { useState } from "react";

export default function ApiPlayground() {
  const [method, setMethod] = useState<"GET"|"POST">("GET");
  const [url, setUrl] = useState("https://api.github.com/repos/amanita1");
  const [body, setBody] = useState("{}");
  const [resp, setResp] = useState<string>("");

  async function run() {
    try {
      const r = await fetch(url, {
        method,
        headers: method === "POST" ? { "Content-Type":"application/json" } : undefined,
        body: method === "POST" ? body : undefined,
      });
      const txt = await r.text();
      setResp(txt);
    } catch (e:any) {
      setResp("Error: " + e.message);
    }
  }

  return (
    <section className="container" style={{ display:"grid", gap:16 }}>
      <h1 style={{ fontSize:28, fontWeight:700 }}>API Playground</h1>

      <div className="glass" style={{ borderRadius:16, padding:"18px 16px", display:"grid", gap:12, marginTop:290, marginBottom:290}}>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          <select value={method} onChange={e=>setMethod(e.target.value as any)}>
            <option>GET</option><option>POST</option>
          </select>
          <input value={url} onChange={e=>setUrl(e.target.value)} style={{ flex:1, minWidth:260 }} />
          <button onClick={run}>Run</button>
        </div>

        {method === "POST" && (
          <textarea value={body} onChange={e=>setBody(e.target.value)} rows={6} />
        )}

        <pre style={{
          whiteSpace:"pre-wrap",
          background:"rgba(255,255,255,.03)",
          padding:12, borderRadius:10, border:"1px solid var(--glass-border)",
          maxHeight:360, overflow:"auto"
        }}>{resp}</pre>
      </div>
    </section>
  );
}

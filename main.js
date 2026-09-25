// Renders the page from SITE (data.js). You shouldn't need to edit this file.

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const ICONS = {
  cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
};

function buttons() {
  const L = SITE.links;
  const out = [`<a class="btn primary" href="${esc(L.cv)}" download>${ICONS.cv}Download CV</a>`];
  out.push(`<a class="btn" href="mailto:${esc(L.email)}">${ICONS.email}Email</a>`);
  if (L.github) out.push(`<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">${ICONS.github}GitHub</a>`);
  if (L.linkedin) out.push(`<a class="btn" href="${esc(L.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>`);
  return out.join("");
}

const tags = (list = []) =>
  list.length ? `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : "";
const bullets = (list = []) =>
  list.length ? `<ul class="bullets">${list.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : "";

// hero
$("name").textContent = SITE.name;
$("role").textContent = SITE.role;
$("pitch").textContent = SITE.pitch;
$("status").textContent = SITE.status;
$("cta").innerHTML = buttons();
$("cta-2").innerHTML = buttons();
$("stats").innerHTML = SITE.stats
  .map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`)
  .join("");

// now
const n = SITE.now;
$("now-card").innerHTML = `
  <div class="now-card">
    <div class="row"><h3>${esc(n.title)}</h3><span class="period">${esc(n.period)}</span></div>
    <div class="org">${esc(n.org)}</div>
    <p style="margin-top:12px;color:#c6c9d4">${esc(n.blurb)}</p>
    ${bullets(n.bullets)}
    ${n.note ? `<p class="note">// ${esc(n.note)}</p>` : ""}
  </div>`;

// experience
$("timeline").innerHTML = SITE.experience
  .map(
    (e) => `
  <li class="card">
    <div class="row"><h3>${esc(e.title)}</h3><span class="period">${esc(e.period)}</span></div>
    <div class="org">${esc(e.org)}${e.place ? " · " + esc(e.place) : ""}</div>
    ${bullets(e.bullets)}
    ${tags(e.tags)}
  </li>`
  )
  .join("");

// projects
$("project-grid").innerHTML = SITE.projects
  .map(
    (p) => `
  <article class="card project${p.featured ? " featured" : ""}">
    <span class="kind">${esc(p.kind)}</span>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    ${tags(p.tags)}
    ${
      p.links && p.links.length
        ? `<div class="links">${p.links
            .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
            .join("")}</div>`
        : ""
    }
  </article>`
  )
  .join("");

// quotes
$("quotes").innerHTML = SITE.quotes
  .map(
    (q) => `
  <figure class="card quote">
    <blockquote>${esc(q.text)}</blockquote>
    <cite><b>${esc(q.org)}</b><span>${esc(q.meta)}</span></cite>
  </figure>`
  )
  .join("");

// skills
$("skills-grid").innerHTML = SITE.skills
  .map((s) => `<div class="card"><h3>${esc(s.group)}</h3>${tags(s.items)}</div>`)
  .join("");

// education
$("edu").innerHTML = SITE.education
  .map(
    (e) => `
  <div class="card">
    <div class="row"><h3>${esc(e.degree)}</h3><span class="period">${esc(e.period)}</span></div>
    <p>${esc(e.school)}</p>
  </div>`
  )
  .join("");

$("year").textContent = new Date().getFullYear();

// scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("in"), io.unobserve(en.target))),
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// active nav link
const links = [...document.querySelectorAll(".nav nav a")];
const navObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting)
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => navObs.observe(s));

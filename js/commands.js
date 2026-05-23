/**
 * commands.js
 * All portfolio commands and their output.
 * Edit this file to personalize your portfolio!
 */

const COMMANDS = {

  help: () => `
<span class="section-header">Available Commands</span>
<hr class="divider"/>
  <kbd>about</kbd>       — Who I am
  <kbd>skills</kbd>      — Tech stack & tools
  <kbd>projects</kbd>    — Things I've built
  <kbd>experience</kbd>  — Work history
  <kbd>contact</kbd>     — How to reach me
  <kbd>resume</kbd>      — Download my resume
  <kbd>clear</kbd>       — Clear the terminal
  <kbd>whoami</kbd>      — Quick intro
  <kbd>banner</kbd>      — Show ASCII banner
  <kbd>easter</kbd>      — 🤫

Type any command and press <kbd>Enter</kbd>.`,

  // ── ABOUT ──────────────────────────────────────────────
  about: () => `
<span class="section-header">$ cat about.txt</span>
<hr class="divider"/>
Hey! I'm <strong style="color:var(--green)">Alex Rivera</strong> — a full-stack developer
based in San Francisco, CA.

I build fast, accessible web apps and love working at the
intersection of design and engineering. When I'm not coding,
I'm probably hiking, brewing coffee, or reading sci-fi.

<span class="tag">Open to opportunities</span>
<span class="tag yellow">Remote-friendly</span>`,

  // ── WHOAMI ─────────────────────────────────────────────
  whoami: () => `alex — developer, builder, coffee enthusiast`,

  // ── SKILLS ─────────────────────────────────────────────
  skills: () => `
<span class="section-header">$ cat skills.json</span>
<hr class="divider"/>
<strong style="color:var(--muted)">Languages</strong>
  <span class="tag">TypeScript</span><span class="tag">Python</span><span class="tag">Go</span><span class="tag">SQL</span><span class="tag">Bash</span>

<strong style="color:var(--muted)">Frontend</strong>
  <span class="tag">React</span><span class="tag">Next.js</span><span class="tag">Svelte</span><span class="tag">Tailwind CSS</span><span class="tag">Framer Motion</span>

<strong style="color:var(--muted)">Backend</strong>
  <span class="tag">Node.js</span><span class="tag">FastAPI</span><span class="tag">PostgreSQL</span><span class="tag">Redis</span><span class="tag">GraphQL</span>

<strong style="color:var(--muted)">DevOps & Tools</strong>
  <span class="tag">Docker</span><span class="tag">GitHub Actions</span><span class="tag">AWS</span><span class="tag">Vercel</span><span class="tag">Linux</span>`,

  // ── PROJECTS ───────────────────────────────────────────
  projects: () => `
<span class="section-header">$ ls -la projects/</span>
<hr class="divider"/>
<strong style="color:var(--green)">▸ Orbit — Task Manager</strong>
  A minimal, keyboard-first project management tool.
  <span class="tag">Next.js</span><span class="tag">PostgreSQL</span><span class="tag">Prisma</span>
  <a href="https://github.com/alexrivera/orbit" target="_blank">github.com/alexrivera/orbit</a>

<strong style="color:var(--green)">▸ Inkdrop — Writing App</strong>
  Distraction-free markdown editor with real-time sync.
  <span class="tag">Electron</span><span class="tag">SQLite</span><span class="tag">React</span>
  <a href="https://github.com/alexrivera/inkdrop" target="_blank">github.com/alexrivera/inkdrop</a>

<strong style="color:var(--green)">▸ Pulse — Analytics Dashboard</strong>
  Open-source analytics alternative to Google Analytics.
  <span class="tag">Go</span><span class="tag">ClickHouse</span><span class="tag">Svelte</span>
  <a href="https://github.com/alexrivera/pulse" target="_blank">github.com/alexrivera/pulse</a>

<strong style="color:var(--green)">▸ This Portfolio</strong>
  Terminal-themed personal site. Pure HTML/CSS/JS.
  <span class="tag">Vanilla JS</span><span class="tag">CSS</span>
  <a href="https://github.com/alexrivera/terminal-portfolio" target="_blank">github.com/alexrivera/terminal-portfolio</a>`,

  // ── EXPERIENCE ─────────────────────────────────────────
  experience: () => `
<span class="section-header">$ cat experience.log</span>
<hr class="divider"/>
<strong style="color:var(--green)">Senior Frontend Engineer</strong>  <span style="color:var(--muted)">2022 – Present</span>
  Acme Corp · San Francisco, CA
  Led UI rebuild that reduced bundle size by 42%.
  Mentored 3 junior engineers.

<strong style="color:var(--green)">Full-Stack Developer</strong>       <span style="color:var(--muted)">2020 – 2022</span>
  Startup Labs · Remote
  Built core product from 0→1. Scaled to 20k users.

<strong style="color:var(--green)">Software Engineering Intern</strong> <span style="color:var(--muted)">Summer 2019</span>
  BetaCo · Austin, TX
  Shipped a customer-facing dashboard in 8 weeks.

<strong style="color:var(--green)">B.S. Computer Science</strong>      <span style="color:var(--muted)">2016 – 2020</span>
  University of Texas at Austin`,

  // ── CONTACT ────────────────────────────────────────────
  contact: () => `
<span class="section-header">$ cat contact.txt</span>
<hr class="divider"/>
  Email    →  <a href="mailto:alex@example.com">alex@example.com</a>
  GitHub   →  <a href="https://github.com/alexrivera" target="_blank">github.com/alexrivera</a>
  LinkedIn →  <a href="https://linkedin.com/in/alexrivera" target="_blank">linkedin.com/in/alexrivera</a>
  Twitter  →  <a href="https://twitter.com/alexrivera" target="_blank">@alexrivera</a>

Feel free to reach out — I reply within 24 hours.`,

  // ── RESUME ─────────────────────────────────────────────
  resume: () => `
Opening resume... <a href="assets/resume.pdf" download>Click here if it doesn't download automatically.</a>
<span style="color:var(--muted)">(Add your resume PDF to the assets/ folder.)</span>`,

  // ── BANNER ─────────────────────────────────────────────
  banner: () => `
<div class="ascii-art">
 █████╗ ██╗     ███████╗██╗  ██╗
██╔══██╗██║     ██╔════╝╚██╗██╔╝
███████║██║     █████╗   ╚███╔╝
██╔══██║██║     ██╔══╝   ██╔██╗
██║  ██║███████╗███████╗██╔╝ ██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
</div>
<span style="color:var(--muted)">  portfolio OS v2.0.1 — type <kbd>help</kbd> to explore</span>`,

  // ── EASTER EGG ─────────────────────────────────────────
  easter: () => `
<span style="color:var(--yellow)">🥚 You found the easter egg!</span>

Here's a haiku for your curiosity:

  <em style="color:var(--green)">green text glowing bright</em>
  <em style="color:var(--green)">cursor blinks in the darkness</em>
  <em style="color:var(--green)">ship the code, ship now</em>`,

  // ── CLEAR (handled in terminal.js) ─────────────────────
  clear: null,
};

// Commands that the user can tab-complete
const COMMAND_LIST = Object.keys(COMMANDS);

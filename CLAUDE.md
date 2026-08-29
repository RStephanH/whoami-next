# Project Analysis: whoami-next

## Overview

**Portfolio website** built with Next.js 16.2.0, React 19.2.4, and TypeScript for Stephan Hernandez, a Systems & Security Engineer (AI-Integrated Infrastructure) based in Madagascar.

**Project Status**: Live and functional
**Tech Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, ESLint 9
**Repository Owner**: RStephanH

---

## Project Structure

```
whoami-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx       (Root layout — loads Inter, IBM Plex Sans, JetBrains Mono via next/font/google)
│   │   ├── globals.css      (Tailwind v4 @theme inline tokens)
│   │   └── page.tsx          (Main page - imports all components)
│   ├── components/           (9 components)
│   │   ├── Hero.tsx          - Main hero section (status indicator, typography pairing)
│   │   ├── Navbar.tsx        - Navigation header (Skills / Projects / Background / Contact anchors)
│   │   ├── Skills.tsx        - Skills carousel wrapper
│   │   ├── Projects.tsx      - Projects carousel wrapper
│   │   ├── Slider.tsx        - Shared peek-carousel (Framer Motion, used by Skills & Projects)
│   │   ├── Background.tsx    - Education + Certifications & Training section
│   │   ├── Languages.tsx     - Compact language proficiency strip
│   │   ├── Contact.tsx       - Contact section
│   │   └── Footer.tsx        - Footer
│   ├── lib/
│   │   └── data.ts           (Config + 15 projects + 6 skill categories + education + certifications + languages)
│   └── types/
│       └── index.ts          (Empty - types defined inline in data.ts)
├── public/
│   └── certs/                 (Scanned/exported certification & training assets, e.g. Power BI attestation PNG)
├── Configuration Files
│   ├── package.json
│   ├── tsconfig.json         (Strict mode, path alias @/*)
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   └── tailwind.config (implicit, via @tailwindcss/postcss v4)
└── Docs
    ├── README.md             (Next.js default)
    ├── CLAUDE.md             (This file)
    └── AGENTS.md             (Custom Next.js warnings)
```

---

## Key Dependencies

### Runtime

- `next@16.2.0` - React framework with App Router
- `react@19.2.4` - UI library
- `react-dom@19.2.4` - React DOM binding
- `framer-motion` - Animation library, powers the peek-carousel (`Slider.tsx`)

### Fonts (next/font/google)

- **Inter** → `--font-inter`, mapped to Tailwind's `--font-sans` — body text
- **IBM Plex Sans** (weights 500/600/700) → `--font-ibm-plex-sans`, mapped to `--font-display` — section/hero headings (`font-display` utility class)
- **JetBrains Mono** → `--font-jetbrains-mono`, mapped to `--font-mono` — labels, eyebrows, tags, code-style text

### Dev Dependencies

- `@tailwindcss/postcss@^4` - Utility CSS framework
- `tailwindcss@^4` - Core Tailwind
- `typescript@^5` - TypeScript compiler
- `eslint@^9` - Linting
- `eslint-config-next@16.2.0` - Next.js ESLint rules
- Type definitions: `@types/node@^20`, `@types/react@^19`, `@types/react-dom@^19`

---

## Configuration Insights

### TypeScript (tsconfig.json)

- **Target**: ES2017
- **Strict Mode**: Enabled (`strict: true`)
- **Module Resolution**: `bundler`
- **Path Aliases**: `@/*` → `./src/*`
- **Plugins**: Next.js plugin for custom type support
- **Output**: Type-checked, no emit (Next.js handles)

### Fonts + Tailwind v4 integration (`globals.css`)

Uses `@theme inline` (not plain `@theme`) because the font tokens reference CSS custom properties injected dynamically at runtime by `next/font` on the `<html>` element, rather than static values known at CSS compile time:

```css
@theme inline {
  --font-sans:    var(--font-inter), system-ui, sans-serif;
  --font-display: var(--font-ibm-plex-sans), system-ui, sans-serif;
  --font-mono:    var(--font-jetbrains-mono), monospace;
}
```

Each `next/font` call in `layout.tsx` must use a `variable` name distinct from the Tailwind token it feeds (e.g. `--font-inter`, not `--font-sans`) — reusing the same name creates a circular reference that silently fails (falls back to system fonts with zero console error).

### Scripts (package.json)

```
dev      → next dev           (Development server)
build    → next build         (Production build)
start    → next start         (Start production server)
lint     → eslint             (Linting)
```

---

## Content Architecture

### Site Owner

- **Name**: Stephan Hernandez
- **Title**: Systems & Security Engineer, AI-Integrated Infrastructure
- **Location**: Madagascar
- **Email**: <rsthernandez24@gmail.com>
- **Links**: GitHub (RStephanH), LinkedIn (rsthernandez)

### Skills (6 Categories)

1. **Network & Security** - Cisco IOS, OSPF, pfSense, Suricata, ELK Stack, Wireshark
2. **Systems & Virtualisation** - Linux, Docker, QEMU/KVM, Bash, libvirt
3. **Backend & DevOps** - Golang, Java/Payara, Python, REST APIs, GitHub Actions
4. **Security & Crypto** - OpenSSL, RSA, AES, SHA-256, OWASP
5. **Web & Frontend** - Next.js, TypeScript, React, NestJS, Tailwind CSS
6. **IoT & Embedded** - ESP32 (Wokwi simulation), MQTT, Arduino C++, sensor telemetry, anomaly detection

### Projects (15 Total)

| Project | Status | Key Tech |
|---------|--------|----------|
| Vulnerable Lab VM | Documented | Vagrant, VirtualBox, Shell, CVE, Pentest |
| DocFlow | WIP | React, Vite, Express, MongoDB, Docker, CI/CD |
| Inspectra — Web Vulnerability Scanner | Live | TypeScript, Next.js, Node.js, CSP, OWASP |
| IVR System — Golang + Asterisk ARI | Live | Golang, Asterisk, ARI, Docker, PBX |
| Contact Manager — Java + CI/CD | Live | Java, Payara, GitHub Actions, Docker Hub |
| OpenSSL Crypto Wrapper | WIP | Python, RSA, AES, SHA-256 |
| Algebra TUI | WIP | Python, TUI, CLI |
| SOC Homelab (pfSense + Suricata + ELK) | WIP | pfSense, Suricata, Snort 3, ELK, QEMU |
| Dual WAN Load Balancer + Proxy Lab | Documented | GNS3, pfSense, Squid Proxy, NAT |
| IDS/IPS Lab (GNS3 + Cisco) | Documented | GNS3, Cisco, Snort 2.9, VLANs, SPAN/RSPAN |
| SentryMesh Gateway — IoT Security Gateway | Live | Go, ESP32, MQTT, Anomaly Detection, bubbletea, SQLite |
| **Sonar Signature Classify** *(new)* | WIP | Python, scikit-learn, pandas, Data Science, Classification |
| **Churn & Recommendation Models — Banking & Insurance** *(new)* | WIP | Python, scikit-learn, ML, Collaborative Filtering (no public repo yet — ML component only, not the full team platform) |
| **ChunkRace — Scoring Engine** *(new)* | WIP | Python, FastAPI, Sentence Embeddings, SQLite, uv (private repo) |
| Portfolio Website (This) | Live | Next.js, TypeScript, Tailwind CSS, React 19 |

### Education

| Degree | Institution | Period |
|---|---|---|
| Master's Degree (in progress) — Connected Objects & Cybersecurity (Objets Connectés Cybersécurité) | École Nationale d'Informatique, Université de Fianarantsoa, Madagascar | 2026 – 2028 (expected) |
| Bachelor's Degree (Licence) — Systems & Network Administration | École Nationale d'Informatique, Université de Fianarantsoa, Madagascar | 2023 – 2026 |

### Certifications & Training

| Name | Issuer | Year | Type |
|---|---|---|---|
| OCI 2025 Certified Foundations Associate | Oracle | 2025 | Certification (verifiable badge) |
| Introduction to Cybersecurity | Cisco Networking Academy | 2026 | Certification (verifiable Credly badge) |
| Power BI Fundamentals | IDEA Academy, Madagascar | 2025 | Training attestation (scanned PNG, not third-party verifiable) |

### Languages

Malagasy (Native), French (Native), English (Professional working proficiency)

---

## Component Breakdown

### Hero

Entry point component. This session: added a "live status" indicator (double-layer `animate-ping` ring over a solid dot, styled as `status: available_for_work` in monospace) replacing the earlier plain `animate-pulse` dot — deliberately echoes the live-monitoring visual language of the SOC/ELK work rather than a generic online badge. Also applies `font-display` to the `h1`, and fixes a Next.js `<Image fill>` warning by adding an explicit `sizes` prop.

### Navbar

Navigation header with anchor links kept in page order: Skills → Projects → Background → Contact.

### Skills / Projects / Background

All three section headings (`h2`) use `font-display` for the typography pairing. Structurally unchanged otherwise from the previous session, aside from Projects/Skills feeding more items into `Slider`.

### Slider (spacing fix this session)

Peek-style carousel (always-mounted, offset-based `x`/`scale`/`opacity` positioning — see prior session notes for the full rewrite rationale). Fixed a layout bug this session: absolutely-positioned cards don't contribute to parent height, so a tall card (e.g. SentryMesh Gateway, with a long description + 7 tags + a code link) could visually collide with the bottom controls/indicators. Fixed by increasing `min-h-[280px]` → `min-h-[380px]` on the card wrapper and `py-6` → `pt-6 pb-14` on the root container.

### Languages

Deliberately compact — a single inline row of pills.

### Contact

Availability text targets systems/infrastructure, security, and AI-integrated backend roles.

### Footer

Simple footer component.

---

## Known Characteristics

✅ **Modern Stack**: Next.js 16 (latest), React 19, TypeScript strict mode
✅ **Styling**: Tailwind CSS v4 with PostCSS
✅ **Type Safety**: Full TypeScript with strict compiler
✅ **Developer Experience**: ESLint configured, path aliases for cleaner imports
✅ **Performance**: Next.js optimization built-in (font loading via next/font, explicit Image `sizes`)
✅ **Content-Driven**: Portfolio with 15 projects, 6 skill categories, education, certifications, and languages
✅ **Accessible carousel**: keyboard nav, reduced-motion support, non-active cards excluded from tab order via `inert`
✅ **Typography pairing**: IBM Plex Sans (display/headings) + Inter (body) + JetBrains Mono (labels/code), self-hosted via next/font, no external font requests
⚠️ **BREAKING CHANGES**: Per AGENTS.md, Next.js 16 has breaking changes - APIs and file structure differ from older versions. Always reference `node_modules/next/dist/docs/` for current behavior.

---

## Recent Changes (this session)

- Fixed font loading: `next/font/google` variable names collided with the Tailwind tokens meant to consume them (`--font-sans` self-referencing itself), causing a silent fallback to system fonts with no console error. Renamed to `--font-inter` / `--font-ibm-plex-sans` / `--font-jetbrains-mono`, switched `@theme` to `@theme inline`
- Applied `font-display` (IBM Plex Sans) across all section headings (Hero, Skills, Projects, Background) for a deliberate display/body typography pairing
- Added a "live status" indicator in the Hero (double-layer ping ring), replacing the generic pulsing dot
- Fixed a missing `import type { Metadata }` in `layout.tsx` and a missing `sizes` prop on the Hero's `<Image fill>`
- Fixed carousel spacing: tall cards (e.g. SentryMesh Gateway) could collide with the prev/next controls due to absolutely-positioned children not contributing to parent height
- Added three projects: Sonar Signature Classify (UCI Sonar dataset classification), Churn & Recommendation Models (ML component only of a team Big Data project — no public repo yet), and ChunkRace — Scoring Engine (private RAG hackathon scoring service)

---

## Build & Deployment Notes

- **Dev**: `npm run dev` starts dev server at localhost:3000 with hot reload
- **Build**: `npm run build` creates optimized production build
- **Deploy**: Ready for Vercel (Vercel recommends this framework)
- **Linting**: `npm run lint` runs ESLint on codebase

---

## Last Updated

2026-08-29

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
│   │   ├── layout.tsx       (Root layout)
│   │   └── page.tsx          (Main page - imports all components)
│   ├── components/           (9 components)
│   │   ├── Hero.tsx          - Main hero section
│   │   ├── Navbar.tsx        - Navigation header (Skills / Projects / Background / Contact anchors)
│   │   ├── Skills.tsx        - Skills carousel wrapper
│   │   ├── Projects.tsx      - Projects carousel wrapper
│   │   ├── Slider.tsx        - Shared peek-carousel (Framer Motion, used by Skills & Projects)
│   │   ├── Background.tsx    - Education + Certifications & Training section
│   │   ├── Languages.tsx     - Compact language proficiency strip
│   │   ├── Contact.tsx       - Contact section
│   │   └── Footer.tsx        - Footer
│   ├── lib/
│   │   └── data.ts           (Config + 12 projects + 6 skill categories + education + certifications + languages)
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
6. **IoT & Embedded** *(new)* - ESP32 (Wokwi simulation), MQTT, Arduino C++, sensor telemetry, anomaly detection

### Projects (12 Total)

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
| **SentryMesh Gateway — IoT Security Gateway** *(new)* | Live | Go, ESP32, MQTT, Anomaly Detection, bubbletea, SQLite |
| Portfolio Website (This) | Live | Next.js, TypeScript, Tailwind CSS, React 19 |

### Education *(new)*

| Degree | Institution | Period |
|---|---|---|
| Master's Degree (in progress) — Connected Objects & Cybersecurity (Objets Connectés Cybersécurité) | École Nationale d'Informatique, Université de Fianarantsoa, Madagascar | 2026 – 2028 (expected) |
| Bachelor's Degree (Licence) — Systems & Network Administration | École Nationale d'Informatique, Université de Fianarantsoa, Madagascar | 2023 – 2026 |

### Certifications & Training *(new)*

| Name | Issuer | Year | Type |
|---|---|---|---|
| OCI 2025 Certified Foundations Associate | Oracle | 2025 | Certification (verifiable badge) |
| Introduction to Cybersecurity | Cisco Networking Academy | 2026 | Certification (verifiable Credly badge) |
| Power BI Fundamentals | IDEA Academy, Madagascar | 2025 | Training attestation (scanned PNG, not third-party verifiable) |

### Languages *(new)*

Malagasy (Native), French (Native), English (Professional working proficiency)

---

## Component Breakdown

### Hero

Entry point component showcasing the portfolio brand and CTA. Title/tagline repositioned this session toward Security Engineering + AI-Integrated Infrastructure; hero tag strip swapped `Next.js` for `LLM Integration` to avoid duplicating a technology already visible at the project level.

### Navbar

Navigation header with anchor links kept in page order: Skills → Projects → Background → Contact. No dedicated link for Languages (intentionally folded into scroll flow, not given its own nav entry — see Background/Languages below).

### Skills

Wraps skill categories and feeds them to `Slider` as `contentType="skills"`.

### Projects

Wraps the 12 projects and feeds them to `Slider` as `contentType="projects"`.

### Slider (rewritten this session)

Peek-style carousel: keeps the active item ± 2 neighbors mounted simultaneously (no mount/unmount cycle), positions them via `x`/`scale`/`opacity` based on circular offset from the active index, so neighbors stay visibly present in the background instead of disappearing. Horizontal motion only (matches the horizontal prev/next controls and avoids scroll-axis conflict with the page's vertical scroll). Keyboard (arrow keys), autoplay with configurable `delay` prop, pause-on-hover, `aria-hidden`/`inert` (boolean, not empty string) on non-active cards, and `prefers-reduced-motion` support. Controls and indicators styled with the site's own tokens (`bg-card`, `border-border`, `text-ink`, `border-accent`) rather than hardcoded white/opacity, so they stay visible regardless of section background.

### Background (new, replaces earlier Education/Certifications split)

Combined Education + Certifications & Training section, following the same section container pattern as `Projects.tsx` (`max-w-4xl mx-auto px-6 py-20`, numbered eyebrow label, `h2` + `p` header). Certifications render with a `type` badge (`certification` vs `training`) to avoid presenting a non-verifiable training attestation at the same evidentiary weight as a verifiable third-party badge.

### Languages (new)

Deliberately compact — a single inline row of pills rather than a full section with its own header/padding, since a 3-item list doesn't carry enough visual weight to justify the same `py-20` treatment as Projects/Background without looking sparse.

### Contact

Contact section — availability text repositioned this session to target systems/infrastructure, security, and AI-integrated backend roles (previously "network engineering, sysadmin, junior dev").

### Footer

Simple footer component.

---

## Known Characteristics

✅ **Modern Stack**: Next.js 16 (latest), React 19, TypeScript strict mode
✅ **Styling**: Tailwind CSS v4 with PostCSS
✅ **Type Safety**: Full TypeScript with strict compiler
✅ **Developer Experience**: ESLint configured, path aliases for cleaner imports
✅ **Performance**: Next.js optimization built-in (font loading, image optimization)
✅ **Content-Driven**: Portfolio with 12 projects, 6 skill categories, education, certifications, and languages
✅ **Accessible carousel**: keyboard nav, reduced-motion support, non-active cards excluded from tab order via `inert`
⚠️ **BREAKING CHANGES**: Per AGENTS.md, Next.js 16 has breaking changes - APIs and file structure differ from older versions. Always reference `node_modules/next/dist/docs/` for current behavior.

---

## Recent Changes (this session)

- Repositioned title/tagline/availability copy (`data.ts`, `Hero.tsx`, `Contact.tsx`) to foreground Security Engineering and AI Integration, matching actual project content and career targets
- Rewrote `Slider.tsx` from a mount/unmount `AnimatePresence` carousel to an always-mounted "peek" carousel (offset-based `x`/`scale`/`opacity`), fixing the "looks like nothing else exists" problem
- Fixed carousel prev/next and indicator controls: replaced `bg-white/20`/`text-white` (invisible on light backgrounds) with design-system tokens for guaranteed contrast
- Fixed a React 19 warning: `inert` passed as boolean (`inert={!isActive}`) instead of an empty string
- Added SentryMesh Gateway project (Go IoT security gateway) and a new "IoT & Embedded" skills category to `data.ts`
- Added Education, Certifications & Training, and Languages content to `data.ts`, plus new `Background.tsx` and `Languages.tsx` components, wired into `page.tsx` and `Navbar.tsx`
- Added `public/certs/` for hosting scanned/exported credential assets (Power BI training attestation PNG)

---

## Build & Deployment Notes

- **Dev**: `npm run dev` starts dev server at localhost:3000 with hot reload
- **Build**: `npm run build` creates optimized production build
- **Deploy**: Ready for Vercel (Vercel recommends this framework)
- **Linting**: `npm run lint` runs ESLint on codebase

---

## Last Updated

2026-08-29

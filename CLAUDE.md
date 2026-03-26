# Project Analysis: whoami-next

## Overview
**Portfolio website** built with Next.js 16.2.0, React 19.2.4, and TypeScript for Stephan Hernandez, a Systems/Network/Software Engineer based in Madagascar.

**Project Status**: Live and functional
**Tech Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS 4, ESLint 9
**Repository Owner**: RStephanH

---

## Project Structure

```
whoami-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx       (Root layout)
│   │   └── page.tsx          (Main page - imports all components)
│   ├── components/           (6 components, 414 lines total)
│   │   ├── Hero.tsx          (118 lines) - Main hero section
│   │   ├── Navbar.tsx        (24 lines) - Navigation header
│   │   ├── Skills.tsx        (50 lines) - Skills grid display
│   │   ├── Projects.tsx      (112 lines) - Projects showcase
│   │   ├── Contact.tsx       (97 lines) - Contact section
│   │   └── Footer.tsx        (13 lines) - Footer
│   ├── lib/
│   │   └── data.ts           (Config + 8 projects + 5 skill categories)
│   └── types/
│       └── index.ts          (Empty - types defined inline in data.ts)
├── public/                   (Static assets)
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

**Total Project Size**: 542MB (includes node_modules)

---

## Key Dependencies

### Runtime
- `next@16.2.0` - React framework with App Router
- `react@19.2.4` - UI library
- `react-dom@19.2.4` - React DOM binding

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
- **Title**: Systems, Network & Software Engineer
- **Location**: Madagascar
- **Email**: randrianirinahernandezstephan@gmail.com
- **Links**: GitHub (RStephanH), LinkedIn (rsthernandez)

### Skills (5 Categories, ~40+ items)
1. **Network & Security** - Cisco IOS, OSPF, pfSense, Suricata, ELK Stack, Wireshark
2. **Systems & Virtualization** - Linux, Docker, QEMU/KVM, Bash, libvirt
3. **Backend & DevOps** - Golang, Java/Payara, Python, REST APIs, GitHub Actions
4. **Security & Crypto** - OpenSSL, RSA, AES, SHA-256, OWASP
5. **Web & Frontend** - Next.js, TypeScript, React, NestJS, Tailwind CSS

### Projects (8 Total)
| Project | Status | Tags | Key Tech |
|---------|--------|------|----------|
| IVR System (Golang + Asterisk ARI) | Live | Golang, Docker, PBX, REST API | Asterisk ARI |
| Contact Manager (Java + CI/CD) | Live | Java, Payara, GitHub Actions | Docker Hub |
| OpenSSL Crypto Wrapper | WIP | Python, RSA, AES | Cryptography |
| Algebra TUI | WIP | Python, Terminal UI | CLI |
| SOC Homelab (pfSense + Suricata + ELK) | WIP | pfSense, ELK Stack, QEMU | IDS/IPS |
| Dual WAN Load Balancer Lab | Documented | GNS3, pfSense, Squid Proxy | Load Balancing |
| IDS/IPS Lab (GNS3 + Snort) | Documented | Cisco, Snort 2.9, VLANs | Network Analysis |
| Portfolio Website (This) | Live | Next.js, TypeScript, Tailwind CSS | React 19 |

---

## Component Breakdown

### Hero (118 lines)
Entry point component showcasing the portfolio brand and CTA.

### Navbar (24 lines)
Navigation header - minimal and efficient.

### Skills (50 lines)
5-category skill grid with categorized expertise.

### Projects (112 lines)
Project card display with status badges, descriptions, tags, and links.

### Contact (97 lines)
Contact form or contact information section.

### Footer (13 lines)
Simple footer component.

---

## Known Characteristics

✅ **Modern Stack**: Next.js 16 (latest), React 19, TypeScript strict mode
✅ **Styling**: Tailwind CSS v4 with PostCSS
✅ **Type Safety**: Full TypeScript with strict compiler
✅ **Developer Experience**: ESLint configured, path aliases for cleaner imports
✅ **Performance**: Next.js optimization built-in (font loading, image optimization)
✅ **Content-Driven**: Portfolio with 8 projects and comprehensive skills showcase

⚠️ **BREAKING CHANGES**: Per AGENTS.md, Next.js 16 has breaking changes - APIs and file structure differ from older versions. Always reference `node_modules/next/dist/docs/` for current behavior.

---

## Build & Deployment Notes
- **Dev**: `npm run dev` starts dev server at localhost:3000 with hot reload
- **Build**: `npm run build` creates optimized production build
- **Deploy**: Ready for Vercel (Vercel recommends this framework)
- **Linting**: `npm run lint` runs ESLint on codebase

---

## Last Updated
2026-03-26 09:25:56 UTC

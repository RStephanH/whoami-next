// src/lib/data.ts

export const siteConfig = {
  name: "Stephan Hernandez",
  fullName: "Stephan Hernandez",
  title: "Systems, Network & Software Engineer",
  tagline:
    "I build things across the stack — from network infrastructure and security labs to backend services and DevOps pipelines. Always learning, always shipping.",
  email: "randrianirinahernandezstephan@gmail.com",
  github: "https://github.com/RStephanH",
  linkedin: "https://linkedin.com/in/rsthernandez",
  location: "Madagascar",
}

export const skills = [
  {
    category: "Network & Security",
    items: [
      "Cisco IOS",
      "OSPF / RIPv2",
      "VLANs / Trunk / SPAN / RSPAN",
      "pfSense",
      "Suricata (IDS)",
      "Snort 2.9 / Snort 3",
      "ELK Stack (SIEM)",
      "WAN Load Balancing",
      "GNS3",
      "Wireshark",
    ],
  },
  {
    category: "Systems & Virtualisation",
    items: [
      "Linux (Debian / Ubuntu / Arch)",
      "QEMU / KVM",
      "virt-manager",
      "Docker",
      "VirtualBox",
      "libvirt",
      "Bash scripting",
      "SSH hardening",
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      "Golang",
      "Java (Payara / Jakarta EE)",
      "Python",
      "REST APIs",
      "Curl",
      "Postman",
      "Asterisk ARI",
      "GitHub Actions (CI/CD)",
      "Docker Hub",
      "Git",
    ],
  },
  {
    category: "Security & Crypto",
    items: [
      "OpenSSL",
      "Asymmetric encryption (RSA)",
      "Symmetric encryption (AES)",
      "Hashing (SHA-256...)",
      "Digital signatures",
      "Vulnerability analysis",
      "OWASP basics",
    ],
  },
  {
    category: "Web & Frontend",
    items: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "React",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
]

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  status: "live" | "wip" | "documented"
}

export const projects: Project[] = [
  {
    title: "Inspectra — Web Vulnerability Scanner",
    description:
      "Web vulnerability scanner focused on identifying security weaknesses in web applications. Analyzes HTML, JavaScript, and Content Security Policy (CSP) headers to surface common attack vectors and misconfigurations.",
    tags: ["Security", "TypeScript", "Next.js", "Node.js", "CSP", "OWASP", "Vulnerability Analysis", "Docker"],
    links: [
      { label: "Source", url: "https://github.com/RStephanH/Inspectra" },
    ],
    status: "live",
  },
  {
    title: "IVR System — Golang + Asterisk ARI",
    description:
      "Built an Interactive Voice Response system in Golang using the Asterisk REST Interface (ARI). Configured the PBX server, containerized the entire stack with Docker. Most complex project to date — combines telephony, backend development, and infrastructure.",
    tags: ["Golang", "Asterisk", "ARI", "Docker", "PBX", "REST API"],
    links: [
      { label: "Backend", url: "https://github.com/RStephanH/ari-stt-tts" },
    ],
    status: "live",
  },
  {
    title: "Contact Manager — Java + CI/CD Pipeline",
    description:
      "Desktop contact management app with a Java backend running on Payara (Jakarta EE). Implemented a full CI/CD pipeline with GitHub Actions — builds the image automatically on push and stores it in Docker Hub.",
    tags: ["Java", "Payara", "GitHub Actions", "Docker", "CI/CD", "Docker Hub"],
    links: [
      { label: "Frontend", url: "https://github.com/RStephanH/Contact-Management" },
      { label: "Backend", url: "https://github.com/RStephanH/contact-backend" },
    ],
    status: "live",
  },
  {
    title: "OpenSSL Crypto Wrapper — Python",
    description:
      "Python application wrapping OpenSSL commands to expose cryptographic operations: asymmetric encryption (RSA), symmetric encryption (AES), hashing (SHA-256), and digital signatures. Built to understand the internals of applied cryptography.",
    tags: ["Python", "OpenSSL", "RSA", "AES", "SHA-256", "Cryptography"],
    links: [
      { label: "Source", url: "https://github.com/RStephanH/crypto-script" },
    ],
    status: "wip",
  },
  {
    title: "Algebra TUI — Python",
    description:
      "Terminal User Interface application for algebra operations. Built with Python as an exploration of TUI development and mathematical computation in the terminal.",
    tags: ["Python", "TUI", "Algebra", "CLI"],
    links: [
      { label: "Source", url: "https://github.com/RStephanH/set-tui" },
    ],
    status: "wip",
  },
  {
    title: "SOC Homelab — pfSense + Suricata + ELK",
    description:
      "Security operations lab using QEMU/virt-manager. pfSense as firewall, Suricata as IDS, Snort 3 as IPS, ELK Stack for log aggregation. OWASP container as vulnerable target. ELK/Snort 3 integration still in progress.",
    tags: ["pfSense", "Suricata", "Snort 3", "ELK", "QEMU", "OWASP"],
    links: [
      { label: "Topologies & scripts", url: "https://github.com/RStephanH/elk-ids-firewall" },
    ],
    status: "wip",
  },
  {
    title: "Dual WAN Load Balancer + Proxy Lab",
    description:
      "GNS3 lab with pfSense handling dual WAN load balancing behind double NAT. Ubuntu Server running Squid as a transparent proxy with site blocking and HTTP header protection.",
    tags: ["GNS3", "pfSense", "Squid Proxy", "Dual WAN", "NAT", "Ubuntu Server"],
    links: [
      { label: "Topologies & scripts", url: "https://github.com/RStephanH/FailSafe-Balance" },
    ],
    status: "documented",
  },
  {
    title: "IDS/IPS Lab — GNS3 + Debian + Cisco",
    description:
      "Enterprise network simulation in GNS3 with two VLANs, Cisco switch with SPAN/RSPAN for traffic mirroring, and Snort 2.9 on Debian as IDS. Learned trunk configuration and inter-VLAN analysis.",
    tags: ["GNS3", "Cisco", "Snort 2.9", "VLANs", "SPAN/RSPAN", "Debian"],
    links: [
      { label: "Topologies & scripts", url: "https://github.com/RStephanH/elk-ids-firewall" },
    ],
    status: "documented",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js, TypeScript, and Tailwind CSS while learning frontend development. First real frontend project after a background in systems, networking, and backend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    links: [
      { label: "Source", url: "https://github.com/RStephanH/portfolio" },
    ],
    status: "live",
  },
]
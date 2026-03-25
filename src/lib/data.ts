
export const siteConfig = {
  name: "Stephan Hernandez",
  fullName: "Stephan Hernandez",
  title: "Systems, Network & Software Engineer",
  tagline:
    "I build things across the stack — from network infrastructure and security labs to backend services and DevOps pipelines. Always learning, always shipping.",
  email: "randrianirinahernandezstephan@gmail.com",
  github: "https://github.com/ton-username",
  linkedin: "https://linkedin.com/in/ton-profil",
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
      "React",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
]

// Type TypeScript — définit la forme exacte d'un projet
export type ProjectLink = {
  label: string  // texte affiché : "Frontend", "Backend", "Topologies"...
  url: string    // lien GitHub ou autre
}

export type Project = {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]  // tableau — peut être vide, ou avoir 1, 2, 3 liens
  status: "live" | "wip" | "documented"  // union type : seulement ces 3 valeurs acceptées
}

export const projects: Project[] = [
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
    title: "IDS/IPS Lab — GNS3 + Debian + Cisco",
    description:
      "Enterprise network simulation in GNS3 with two VLANs, Cisco switch with SPAN/RSPAN for traffic mirroring, and Snort 2.9 on Debian as IDS. Learned trunk configuration and inter-VLAN analysis.",
    tags: ["GNS3", "Cisco", "Snort 2.9", "VLANs", "SPAN/RSPAN", "Debian"],
    links: [
      { label: "Topologies & scripts", url: "https://github.com/ton-username/homelab" },
    ],
    status: "documented",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js, TypeScript, and Tailwind CSS while learning frontend development. First real frontend project after a background in systems, networking, and backend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    links: [
      { label: "Source", url: "https://github.com/ton-username/portfolio" },
    ],
    status: "live",
  },
]

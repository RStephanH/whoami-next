import { siteConfig } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-border">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted">
          {`© ${new Date().getFullYear()} ${siteConfig.name}`}
        </span>
        <span className="text-xs font-mono text-muted">
          Built with Next.js + Tailwind
        </span>
      </div>
    </footer>
  )
}

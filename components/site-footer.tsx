import Link from "next/link"
import { Github } from "lucide-react"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden p-6 lg:px-8">
        <nav
          className="-mb-6 flex columns-2 justify-center space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="flex gap-2 text-sm leading-6"
                target="_blank"
              >
                {}
                <Github className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </nav>
        <Link
          href="https://github.com/kazmonroy/spire"
          className="mt-4 block text-center text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </Link>
      </div>
    </footer>
  )
}

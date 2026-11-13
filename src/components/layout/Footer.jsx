import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <a href="#top" className="font-display text-base font-semibold text-ink">Lorem Ipsum</a>
        <p>© 2024 Lorem ipsum dolor sit amet.</p>
        <a href="#top" className="inline-flex items-center gap-1 transition hover:text-gold-700">Lorem ipsum <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  )
}

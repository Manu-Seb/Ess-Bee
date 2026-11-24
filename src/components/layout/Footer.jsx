import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 py-8 text-sm text-body md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#top" className="font-display text-base font-semibold text-ink">Ess Bee</a>
        <p>Premium black pepper and cardamom · Kanjirappally, Kottayam</p>
        <a href="#top" className="nav-link inline-flex min-h-11 items-center gap-1 transition hover:text-gold-dark">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  )
}

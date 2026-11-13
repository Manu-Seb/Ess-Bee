import { ArrowUpRight, Menu } from 'lucide-react'

const links = ['Lorem', 'Ipsum', 'Dolor']

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Lorem Ipsum home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300 text-gold-700">
            <span className="font-display text-xl">L</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">Lorem Ipsum</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {links.map((link, i) => <a key={link} href={`#${['about', 'services', 'contact'][i]}`} className="text-sm text-ink/65 transition hover:text-gold-700">{link}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-emerald-800 sm:flex">
          Lorem ipsum <ArrowUpRight size={15} />
        </a>
        <button className="rounded-full border border-ink/10 p-2 md:hidden" aria-label="Open menu"><Menu size={20} /></button>
      </div>
    </header>
  )
}

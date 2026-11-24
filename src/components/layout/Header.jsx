import { ArrowUpRight, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = ['Our story', 'Products', 'Contact']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky inset-x-0 top-0 z-30 transition-colors duration-300 ${scrolled ? 'border-b border-gold/20 bg-paper/90 shadow-nav backdrop-blur-xl' : 'border-b border-transparent bg-paper/80 backdrop-blur-md'}`}>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Ess Bee home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-cardamom">
            <span className="font-display text-lg font-semibold">EB</span>
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">Ess Bee</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {links.map((link, i) => <a key={link} href={`#${['about', 'products', 'contact'][i]}`} className="nav-link text-sm font-medium text-body transition hover:text-cardamom">{link}</a>)}
        </nav>
        <a href="#contact" className="group hidden min-h-[48px] items-center gap-2 rounded-full bg-cardamom px-5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-cardamom-hover hover:shadow-md sm:flex">
          Get in touch <ArrowUpRight size={15} />
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 transition active:scale-[.98] md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><Menu size={20} /></button>
      </div>
      {menuOpen && <nav className="border-t border-gold/20 bg-paper/95 px-6 py-4 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">{links.map((link, i) => <a key={link} onClick={() => setMenuOpen(false)} href={`#${['about', 'products', 'contact'][i]}`} className="block border-b border-ink/5 py-3 text-sm font-medium text-body last:border-0">{link}</a>)}</nav>}
    </header>
  )
}

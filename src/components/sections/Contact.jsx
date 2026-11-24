import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-warm bg-paper">
      <Reveal className="mx-auto max-w-[1200px] px-5 py-4 lg:px-8 lg:py-4">
        <div className="flex flex-col gap-6 border-y border-gold/25 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-12">
          <div>
            <p className="section-kicker">Based in Kanjirappally, Kottayam</p>
            <h2 className="text-balance font-display text-[clamp(28px,7.5vw,34px)] sm:text-5xl">Let’s talk spices.</h2>
          </div>
          <a href="#products" className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 self-start rounded-full border border-gold px-6 text-sm font-semibold text-ink transition hover:bg-gold-dark hover:text-white active:scale-[.98] sm:w-auto sm:self-auto">Explore our spices <ArrowUpRight className="transition-transform group-hover:translate-x-[3px]" size={16} /></a>
        </div>
      </Reveal>
    </section>
  )
}

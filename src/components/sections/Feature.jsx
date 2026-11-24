import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'

export default function Feature() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-32">
      <Reveal>
        <div className="relative mx-auto overflow-hidden rounded-panel bg-cardamom px-6 py-10 text-white sm:px-14 lg:px-20 lg:py-20">
          <div className="absolute -right-36 -top-48 h-[620px] w-[620px] rounded-full border border-gold/20" />
          <div className="absolute -right-12 -top-32 h-[470px] w-[470px] rounded-full border border-gold/15" />
          <div className="relative max-w-xl">
            <p className="section-kicker text-white before:bg-gold">Export quality</p>
            <h2 className="text-balance font-display text-[clamp(28px,7.5vw,34px)] leading-[1.15] sm:text-[clamp(44px,4.2vw,56px)]">Grounded in care.<br />Ready for the world.</h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-white sm:mt-5 sm:text-[17px] sm:leading-[1.7]">Ess Bee is preparing premium spice grades for export, with EUDR certification and responsible sourcing at the heart of our approach.</p>
            <a href="#contact" className="group mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-gold-dark px-7 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold-hover active:scale-[.98] sm:mt-8 lg:w-auto">Talk to Ess Bee <ArrowUpRight className="transition-transform group-hover:translate-x-[3px]" size={16} /></a>
          </div>
          <div className="absolute bottom-[-11rem] right-[9%] hidden h-[400px] w-[250px] rounded-t-full border border-gold/20 bg-gold/5 md:block" />
        </div>
      </Reveal>
    </section>
  )
}

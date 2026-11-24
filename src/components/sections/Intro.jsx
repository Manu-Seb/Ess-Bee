import { ArrowUpRight } from 'lucide-react'
import blackPepper from '../../../static/black_pep1.jpg'
import Reveal from '../ui/Reveal.jsx'

export default function Intro() {
  return (
    <section id="about" className="bg-paper-warm">
      <div className="about-layout mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-32">
        <Reveal className="about-eyebrow"><p className="section-kicker">Rooted in Kanjirappally</p></Reveal>
        <Reveal className="about-heading"><h2 className="section-title text-balance">A taste of Kottayam.</h2></Reveal>
        <Reveal className="about-image">
          <div className="about-photo-frame group">
            <div className="relative z-10 overflow-hidden rounded-card">
              <img src={blackPepper} alt="Premium black peppercorns" className="warm-photo transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 rounded-card bg-gradient-to-t from-black/30 via-transparent to-black/5" />
            </div>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <p className="max-w-[60ch] text-[16px] leading-[1.65] text-body sm:text-[17px] sm:leading-[1.7]">Ess Bee is based in Kanjirappally, Kottayam, a region known for its rich spice-growing heritage. We bring the character of Kerala spices to every batch.</p>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-body sm:text-[17px] sm:leading-[1.7]">Our focus is on premium black pepper and cardamom, graded with care for customers seeking dependable export quality.</p>
        </Reveal>
        <Reveal className="about-link"><a href="#products" className="inline-flex min-h-11 w-fit items-center gap-2 border-b border-gold pb-2 text-sm font-semibold text-ink transition hover:text-gold-dark">Meet our products <ArrowUpRight size={15} /></a></Reveal>
      </div>
    </section>
  )
}

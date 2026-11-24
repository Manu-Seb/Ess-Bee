import { ArrowUpRight, Sparkles, Compass, Layers3 } from 'lucide-react'
import blackPepperClose from '../../../static/black_pep2.jpg'
import blackPepper from '../../../static/black_pep1.jpg'
import cardamom from '../../../static/cardamom.jpg'
import Reveal from '../ui/Reveal.jsx'
import { useRef, useState } from 'react'

const services = [
  { icon: Sparkles, title: 'Black pepper', image: blackPepperClose, alt: 'A close view of black peppercorns', copy: 'Bold, aromatic black pepper selected for its rich character and graded for premium export quality.' },
  { icon: Compass, title: 'Cardamom', image: cardamom, alt: 'Green cardamom pods in a wooden spoon', copy: 'Fragrant cardamom with the distinctive warmth of Kerala, prepared to meet discerning quality expectations.' },
  { icon: Layers3, title: 'Responsible sourcing', image: blackPepper, alt: 'Premium black peppercorns', copy: 'Our export-grade offering is supported by EUDR certification, with a focus on responsible, traceable sourcing.' },
]

export default function Services() {
  const trackRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const updateActiveSlide = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.getBoundingClientRect().left + track.clientWidth / 2
    let closest = 0
    let distance = Infinity
    Array.from(track.children).forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      if (Math.abs(center - cardCenter) < distance) {
        distance = Math.abs(center - cardCenter)
        closest = index
      }
    })
    setActiveSlide(closest)
  }

  const showSlide = (index) => {
    const track = trackRef.current
    const card = track?.children[index]
    if (!card) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' })
    setActiveSlide(index)
  }

  return (
    <section id="products" className="bg-alternate py-16 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-kicker justify-center">From the spice heartland</p>
          <h2 className="section-title text-balance">Premium spices, thoughtfully graded.</h2>
          <p className="mx-auto mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-body">Discover Ess Bee black pepper and cardamom, prepared for customers looking for quality and responsible sourcing.</p>
        </Reveal>
        <div ref={trackRef} onScroll={updateActiveSlide} className="products-track relative left-1/2 mt-8 flex w-screen -translate-x-1/2 snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:static md:mt-14 md:grid md:w-auto md:translate-x-0 md:grid-cols-3 md:items-stretch md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {services.map(({ icon: Icon, title, image, alt, copy }, index) => (
            <Reveal key={title} delay={index * 80} className="h-full flex-[0_0_82%] snap-center md:flex-none">
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-warm bg-paper-warm shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={image} alt={alt} loading="lazy" className="warm-photo h-full w-full object-cover transition duration-[400ms] ease-out group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                  <span className="absolute left-5 top-5 rounded-full bg-cardamom px-3 py-1 font-display text-xs text-white">0{index + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Icon className="mb-5 text-cardamom" size={24} strokeWidth={1.4} />
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-body sm:text-[17px] sm:leading-[1.7]">{copy}</p>
                  <a href="#contact" className="group/link mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-xs font-bold uppercase tracking-[.16em] text-cardamom transition hover:text-gold-dark">Enquire <ArrowUpRight className="transition-transform group-hover/link:translate-x-[3px]" size={14} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex justify-center md:hidden" role="group" aria-label="Product slides">
          {services.map((service, index) => <button key={service.title} onClick={() => showSlide(index)} className="flex h-11 w-11 items-center justify-center rounded-full active:scale-[.98]" aria-label={`Show ${service.title}`} aria-current={activeSlide === index ? 'true' : undefined}><span className={`product-dot ${activeSlide === index ? 'is-active' : ''}`} /></button>)}
        </div>
      </div>
    </section>
  )
}

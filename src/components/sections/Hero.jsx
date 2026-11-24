import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import cardamomImage from '../../../static/cardamom.jpg'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-alternate">
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-5 pb-10 pt-8 lg:min-h-[660px] lg:grid-cols-[1fr_.85fr] lg:gap-10 lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-[590px] py-2 lg:py-8">
          <p className="section-kicker">Premium spices from Kerala</p>
          <h1 className="max-w-[600px] text-balance font-display text-[clamp(40px,11vw,52px)] leading-[1.05] tracking-[-.02em] lg:text-[clamp(62px,5.5vw,69px)]">Ess Bee<br /><span className="italic text-gold">Pepper &amp; Cardamom</span></h1>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.65] text-body sm:text-[17px] sm:leading-[1.7] lg:mt-6">Premium black pepper and cardamom from Kanjirappally, Kottayam. Carefully graded for export quality and sourced with EUDR certification.</p>
          <div className="mt-6 flex flex-col items-stretch gap-3 lg:mt-8 lg:flex-row lg:items-center lg:gap-5">
            <a href="#products" className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gold-dark px-6 text-sm font-semibold text-white shadow-primary transition hover:-translate-y-0.5 hover:bg-gold-hover active:scale-[.98] lg:justify-start">Explore our spices <ArrowUpRight className="transition-transform group-hover:translate-x-[3px]" size={16} /></a>
            <a href="#about" className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-body underline decoration-gold/50 underline-offset-4 transition hover:text-gold-dark">Our story <span className="ml-1">↗</span></a>
          </div>
          <div className="mt-10 hidden items-center gap-4 text-[11px] font-semibold uppercase tracking-[.2em] text-cardamom lg:flex"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-cardamom/25"><ArrowDown size={14} /></span>Grown in Kerala</div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-[85vw] max-w-[440px] lg:aspect-auto lg:h-[550px] lg:w-full lg:max-w-[490px]" aria-label="Ess Bee spices">
          <div className="absolute right-0 top-1/2 h-[72%] w-[80%] -translate-y-1/2 rounded-full bg-gold/20 shadow-soft" />
          <div className="absolute right-[4%] top-1/2 z-10 h-[87%] w-[92%] -translate-y-1/2 overflow-hidden rounded-t-[48%] rounded-b-xl border-[9px] border-card-white shadow-lift lg:right-[8%] lg:w-[69%]" style={{ transform: `translateY(calc(-50% + ${Math.min(scrollY * 0.055, 34)}px))` }}>
            <img src={cardamomImage} alt="Fresh green cardamom pods" className="warm-photo h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-cardamom/35 via-transparent to-gold/10 mix-blend-multiply" />
          </div>
          <div className="absolute -right-[2%] top-0 z-0 h-14 w-14 rounded-full border border-card-white bg-gold/70 shadow-soft sm:h-16 sm:w-16" />
        </div>
      </div>
    </section>
  )
}

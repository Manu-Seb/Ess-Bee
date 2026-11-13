import { ArrowUpRight } from 'lucide-react'

export default function Intro() {
  return (
    <section id="about" className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1fr] lg:gap-24 lg:px-10 lg:py-32">
      <div className="relative min-h-[340px] overflow-hidden rounded-[2px] bg-[#e9e2d3]">
        <div className="absolute inset-5 border border-white/70" />
        <div className="absolute left-[18%] top-[13%] h-[90%] w-[48%] rounded-t-full bg-gradient-to-br from-[#d7c69f] via-[#f5f0e5] to-[#b69555] shadow-2xl" />
        <div className="absolute bottom-[-17%] right-[10%] h-[74%] w-[36%] rounded-t-full bg-gradient-to-br from-[#fffdf8] to-[#d3c5a7]" />
        <div className="absolute bottom-8 left-8 text-xs uppercase tracking-[.24em] text-ink/50">Lorem ipsum</div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="section-kicker">Lorem ipsum dolor sit</p>
        <h2 className="section-title">Lorem ipsum<br />dolor sit amet.</h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-ink/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum, sed posuere consectetur est at lobortis.</p>
        <p className="mt-4 max-w-lg text-sm leading-7 text-ink/60">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <a href="#services" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-gold-500 pb-2 text-sm font-semibold text-ink transition hover:text-gold-700">Lorem ipsum <ArrowUpRight size={15} /></a>
      </div>
    </section>
  )
}

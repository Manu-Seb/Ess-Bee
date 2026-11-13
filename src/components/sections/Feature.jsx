import { ArrowUpRight } from 'lucide-react'

export default function Feature() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative overflow-hidden bg-[#292720] px-8 py-14 text-white sm:px-14 lg:px-20 lg:py-20">
        <div className="absolute -right-16 -top-32 h-[430px] w-[430px] rounded-full border border-gold-300/30" />
        <div className="absolute -right-2 -top-16 h-[300px] w-[300px] rounded-full border border-gold-300/20" />
        <div className="relative max-w-xl">
          <p className="section-kicker text-gold-300 before:bg-gold-300">Lorem ipsum dolor</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gold-700">Lorem ipsum <ArrowUpRight size={16} /></a>
        </div>
        <div className="absolute bottom-[-8rem] right-[12%] hidden h-[330px] w-[210px] rounded-t-full border border-gold-300/40 bg-gradient-to-b from-gold-300/20 to-transparent md:block" />
      </div>
    </section>
  )
}

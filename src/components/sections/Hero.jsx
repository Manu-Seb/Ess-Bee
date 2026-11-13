import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#f7f4ed] pt-32 lg:min-h-[790px]">
      <div className="absolute -right-32 -top-28 h-[620px] w-[620px] rounded-full border border-gold-300/50" />
      <div className="absolute -right-10 -top-5 h-[470px] w-[470px] rounded-full border border-gold-300/40" />
      <div className="absolute right-[-4rem] top-28 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-gold-100 via-[#eadbb8] to-[#bc9b5b] opacity-80" />
      <div className="absolute right-[5%] top-36 h-[490px] w-[340px] rounded-[48%_48%_8px_8px] border-[10px] border-white/45 bg-gradient-to-b from-white/60 to-transparent shadow-soft lg:right-[12%] lg:w-[390px]" />
      <div className="absolute right-[13%] top-52 h-[360px] w-[170px] rounded-t-full border border-white/60 bg-gradient-to-b from-white/60 to-gold-300/20 lg:right-[21%] lg:w-[210px]" />
      <div className="absolute right-[7%] top-[29rem] h-20 w-20 rounded-full border border-white/70 bg-white/30 backdrop-blur-sm lg:right-[10%]" />
      <div className="relative mx-auto grid max-w-7xl items-center px-6 pb-24 pt-20 lg:grid-cols-[1fr_.8fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.24em] text-gold-700"><span className="h-px w-9 bg-gold-500" />Lorem ipsum dolor sit amet</p>
          <h1 className="font-display text-5xl leading-[1.08] tracking-[-.035em] sm:text-6xl lg:text-[76px]">Lorem ipsum<br /><span className="italic text-emerald-700">dolor sit</span> amet.</h1>
          <p className="mt-7 max-w-md text-base leading-7 text-ink/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#about" className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800">Lorem ipsum <ArrowUpRight size={16} /></a>
            <a href="#services" className="text-sm font-medium text-ink/65 transition hover:text-gold-700">Lorem ipsum <span className="ml-1">↗</span></a>
          </div>
          <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-ink/40"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15"><ArrowDown size={14} /></span>Lorem ipsum dolor</div>
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-paper to-transparent" />
    </section>
  )
}

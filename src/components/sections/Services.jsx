import { ArrowUpRight, Sparkles, Compass, Layers3 } from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Lorem ipsum', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.' },
  { icon: Compass, title: 'Dolor sit amet', copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.' },
  { icon: Layers3, title: 'Consectetur elit', copy: 'Maecenas faucibus mollis interdum. Donec sed odio dui, vitae elit libero, a pharetra augue.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker justify-center">Lorem ipsum dolor sit amet</p>
          <h2 className="section-title">Lorem ipsum<br className="sm:hidden" /> consectetur elit.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/55">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article key={title} className={`group relative border border-ink/10 p-8 transition duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft ${index === 1 ? 'bg-paper' : 'bg-white'}`}>
              <span className="absolute right-8 top-8 font-display text-sm text-gold-500/70">0{index + 1}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Icon size={21} strokeWidth={1.5} /></div>
              <h3 className="mt-8 font-display text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/55">{copy}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/70 transition group-hover:text-emerald-700">Lorem ipsum <ArrowUpRight size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

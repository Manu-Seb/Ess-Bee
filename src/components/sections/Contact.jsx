import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-10 lg:py-20">
        <div>
          <p className="section-kicker">Lorem ipsum dolor</p>
          <h2 className="font-display text-3xl sm:text-4xl">Lorem ipsum sit amet.</h2>
        </div>
        <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 self-start rounded-full border border-emerald-700 px-6 py-4 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white sm:self-auto">Lorem ipsum <ArrowUpRight size={16} /></a>
      </div>
    </section>
  )
}

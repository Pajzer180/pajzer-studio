import { motion } from 'framer-motion'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'

const services = [
  {
    number: '01',
    title: 'Budowa strony od podstaw',
    desc: 'Projekt od zera — od uporządkowania oferty i struktury po gotową stronę dopasowaną do firmy i jej celów.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    tag: 'Najpopularniejsze',
  },
  {
    number: '02',
    title: 'Poprawa istniejącej strony',
    desc: 'Przebudowa strony, która już istnieje, ale jest chaotyczna, nieczytelna albo nie prowadzi klienta do kontaktu tak, jak powinna.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    tag: null,
  },
  {
    number: '03',
    title: 'Optymalizacja pod SEO',
    desc: 'Przygotowanie strony pod lepszą widoczność w Google poprzez poprawę struktury, treści i podstaw technicznych.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tag: null,
  },
  {
    number: '04',
    title: 'Pakiet kompleksowy',
    desc: 'Połączenie projektowania strony, uporządkowania komunikacji i przygotowania pod SEO w jednym spójnym procesie.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    tag: 'Najlepszy wybór',
  },
]

export default function Offer() {
  return (
    <section
      id="oferta"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
      aria-labelledby="offer-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2563EB, transparent)' }}
        aria-hidden="true"
      />

      <div className="section-divider mb-28 max-w-6xl mx-auto" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimateIn variant="fadeUp">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
              Oferta
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <h2
              id="offer-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
              style={{ color: 'var(--text-strong)' }}
            >
              Zakres usług
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Tworzę strony firmowe i przebudowuję istniejące witryny tak, aby lepiej pokazywały
              ofertę, porządkowały komunikację i wspierały rozwój firmy online.
            </p>
          </AnimateIn>
        </div>

        {/* Cards grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.number}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative card-dark rounded-2xl p-8 transition-all duration-300 group h-full"
                >
                  {s.tag && (
                    <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest text-[#2563EB] uppercase bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full">
                      {s.tag}
                    </span>
                  )}

                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 w-13 h-13 w-12 h-12 rounded-xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB]/25 transition-colors duration-300">
                      {s.icon}
                    </span>
                    <span className="text-xs font-black mt-3.5 tracking-widest select-none" style={{ color: 'var(--text-number)' }}>
                      {s.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-3" style={{ color: 'var(--text-strong)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>

                  {/* Bottom line on hover */}
                  <div className="mt-6 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </motion.article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Footer note */}
        <AnimateIn variant="fadeUp" delay={0.2}>
          <div
            className="mt-12 flex items-start gap-3 rounded-xl p-5"
            style={{
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--hover-bg-subtle)',
            }}
          >
            <svg className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
              Każdy projekt wyceniam indywidualnie, ponieważ zakres prac zależy od potrzeb
              firmy, liczby podstron i celu strony.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

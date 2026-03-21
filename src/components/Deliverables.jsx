import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'

const items = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    title: 'Responsywny projekt',
    desc: 'Strona dopasowana do telefonów, tabletów i komputerów.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: 'Przejrzysta nawigacja',
    desc: 'Układ, który ułatwia użytkownikowi poruszanie się po stronie.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Formularz kontaktowy',
    desc: 'Prosta i wygodna forma kontaktu dla potencjalnych klientów.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Podstawowe przygotowanie pod SEO',
    desc: 'Struktura i treści przygotowane pod dalszą widoczność w Google.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Możliwość dalszej rozbudowy',
    desc: 'Strona zaprojektowana tak, aby można ją było rozwijać wraz z firmą.',
  },
]

export default function Deliverables() {
  return (
    <section
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
      aria-labelledby="deliverables-heading"
    >
      <div className="section-divider mb-28 max-w-6xl mx-auto" aria-hidden="true" />

      {/* Right glow */}
      <div
        className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimateIn variant="fadeUp">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
              Zakres realizacji
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <h2
              id="deliverables-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
              style={{ color: 'var(--text-strong)' }}
            >
              Co otrzymujesz<br />
              <span className="text-gradient">w ramach realizacji</span>
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              W ramach realizacji tworzę stronę, która jest czytelna, funkcjonalna
              i gotowa do dalszego rozwoju.
            </p>
          </AnimateIn>
        </div>

        {/* Items */}
        <StaggerContainer staggerDelay={0.09}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="card-dark rounded-2xl p-6 transition-all duration-300 group h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/25 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text-strong)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}

            {/* CTA card */}
            <StaggerItem>
              <Link
                to="/kontakt"
                className="relative flex flex-col items-start justify-between rounded-2xl p-6 h-full overflow-hidden cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{ background: 'radial-gradient(circle, white, transparent)' }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-3">
                    Gotowy?
                  </p>
                  <p className="text-base font-bold text-white leading-snug mb-2">
                    Omówmy Twój projekt
                  </p>
                  <p className="text-sm text-blue-200 leading-relaxed">
                    Napisz, co potrzebujesz — odpiszę i zaproponuję wycenę.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                  Skontaktuj się
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

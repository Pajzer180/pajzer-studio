import { motion } from 'framer-motion'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Dopasowane do potrzeb',
    desc: 'Projekt zawsze opieram na realnych potrzebach firmy — nie na gotowym szablonie.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Terminowa realizacja',
    desc: 'Dostarczam w ustalonym czasie i informuję na bieżąco o postępach.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Konkretna komunikacja',
    desc: 'Wiesz, co dzieje się z projektem na każdym etapie. Bez zbędnego żargonu.',
  },
]

export default function About() {
  return (
    <section
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-labelledby="about-heading"
    >
      {/* Subtle divider */}
      <div className="section-divider mb-24 max-w-6xl mx-auto" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text block */}
          <div>
            <AnimateIn variant="fadeUp" delay={0}>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
                O projekcie
              </span>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.1}>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-black leading-tight mb-6"
                style={{ color: 'var(--text-strong)' }}
              >
                Strona, która działa dla firmy,{' '}
                <span className="text-gradient">a nie tylko ładnie wygląda</span>
              </h2>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Projektuję i przebudowuję strony firmowe tak, aby lepiej tłumaczyły
                ofertę i ułatwiały pozyskiwanie nowych klientów. W każdym projekcie
                staram się dobrze zrozumieć wizję klienta i dopasować stronę do jego
                realnych potrzeb. Zawsze dbam o czytelny układ strony i terminową realizację.
              </p>
            </AnimateIn>
          </div>

          {/* Benefit cards */}
          <StaggerContainer staggerDelay={0.12} delay={0.1}>
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 card-dark rounded-xl p-5 cursor-default transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center mt-0.5">
                      {b.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold mb-1" style={{ color: 'var(--text-strong)' }}>{b.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.desc}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

        </div>
      </div>
    </section>
  )
}

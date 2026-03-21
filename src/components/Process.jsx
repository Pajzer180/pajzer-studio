import { motion } from 'framer-motion'
import AnimateIn, { StaggerContainer, StaggerItem } from './AnimateIn'

const steps = [
  {
    step: '01',
    title: 'Zrozumienie wizji i potrzeb',
    desc: 'Na początku poznaję firmę, jej ofertę i cel, jaki ma spełniać strona.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Uporządkowanie oferty i struktury',
    desc: 'Tworzę logiczny układ strony, który pomaga lepiej wyjaśnić ofertę i ułatwia klientowi poruszanie się po stronie.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Indywidualne podejście',
    desc: 'Każdy projekt dopasowuję do realnych potrzeb firmy, zamiast opierać go na przypadkowym szablonie.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Jasna komunikacja',
    desc: 'Stawiam na konkretną współpracę, przejrzyste ustalenia i prosty proces bez zbędnego chaosu.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Terminowa realizacja',
    desc: 'Dbam o to, aby projekt był wykonywany zgodnie z ustalonym zakresem i harmonogramem.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section
      id="wspolpraca"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-labelledby="process-heading"
    >
      <div className="section-divider mb-28 max-w-6xl mx-auto" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-end">
          <div>
            <AnimateIn variant="fadeUp">
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
                Współpraca
              </span>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.1}>
              <h2
                id="process-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                style={{ color: 'var(--text-strong)' }}
              >
                Jak wygląda<br />
                <span className="text-gradient">współpraca</span>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Każdy projekt prowadzę w uporządkowany sposób — od zrozumienia potrzeb
              firmy po gotową stronę dopasowaną do jej celu.
            </p>
          </AnimateIn>
        </div>

        {/* Steps */}
        <StaggerContainer staggerDelay={0.12}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Etapy współpracy">
            {steps.map((s, i) => (
              <StaggerItem key={s.step}>
                <motion.li
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                  className={`relative card-dark rounded-2xl p-7 transition-all duration-300 group ${
                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Step number watermark */}
                  <span
                    className="absolute top-4 right-5 text-5xl font-black select-none pointer-events-none"
                    style={{ color: 'var(--step-watermark)' }}
                    aria-hidden="true"
                  >
                    {s.step}
                  </span>

                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/25 transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-[10px] font-black text-[#2563EB]/40 tracking-widest">
                      KROK {s.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: 'var(--text-strong)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                </motion.li>
              </StaggerItem>
            ))}
          </ol>
        </StaggerContainer>
      </div>
    </section>
  )
}

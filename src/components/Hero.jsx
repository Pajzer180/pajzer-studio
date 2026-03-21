import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'Czytelna struktura oferty',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    label: 'Responsywny projekt strony',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: 'Podstawy SEO i widoczność w Google',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: 'Jasna komunikacja i terminowość',
  },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-labelledby="hero-heading"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-100" aria-hidden="true" />

      {/* Blue glow orb top-right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)', opacity: 'var(--glow-opacity-lg)' }}
        aria-hidden="true"
      />

      {/* Blue glow orb bottom-left */}
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1D4ED8 0%, transparent 70%)', opacity: 'var(--glow-opacity-sm)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-6"
            >
              Strony firmowe · SEO · Przebudowa
            </motion.span>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight"
              style={{ color: 'var(--text-strong)' }}
            >
              Projektujemy strony firmowe{' '}
              <span className="text-gradient">od struktury oferty</span>{' '}
              po przygotowanie pod SEO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              Pomagamy małym firmom i firmom B2B zamienić nieczytelną stronę
              w bardziej logiczne narzędzie do prezentacji oferty
              i zdobywania klientów.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 glow-btn text-sm tracking-wide"
              >
                Omów projekt
              </Link>
              <a
                href="#oferta"
                className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm tracking-wide"
                style={{
                  color: 'var(--text-strong)',
                  border: '1px solid var(--border-strong)',
                  backgroundColor: 'var(--hover-bg-subtle)',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--hover-bg-medium)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--hover-bg-subtle)'}
              >
                Zobacz ofertę
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: '100%', label: 'Responsywne projekty' },
                { value: 'SEO', label: 'Podstawy w każdym projekcie' },
                { value: 'B2B', label: 'Specjalizacja' },
              ].map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-lg font-black leading-none" style={{ color: 'var(--text-strong)' }}>{s.value}</p>
                  <p className="text-xs mt-1 leading-snug max-w-[80px]" style={{ color: 'var(--text-subtle)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – feature card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:flex justify-end hidden"
          >
            <div className="w-full max-w-[360px]">
              {/* Outer glow */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{ background: 'linear-gradient(135deg, #2563EB, transparent)', opacity: 'var(--card-outer-glow)' }}
                  aria-hidden="true"
                />
                <div
                  className="relative backdrop-blur-sm rounded-2xl p-6 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-card-transp)',
                    border: '1px solid var(--border-medium)',
                  }}
                >
                  {/* Card inner glow */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #2563EB, transparent)', opacity: 'var(--card-glow-opacity)' }}
                    aria-hidden="true"
                  />

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'var(--text-disabled)' }}>
                    Co robię
                  </p>

                  <ul className="space-y-1" role="list">
                    {features.map((f, i) => (
                      <motion.li
                        key={f.label}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                        className="flex items-center gap-3 py-3 last:border-0"
                        style={{ borderBottom: '1px solid var(--border-subtle)' }}
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center">
                          {f.icon}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-feature)' }}>{f.label}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-5"
                  >
                    <Link
                      to="/kontakt"
                      className="block text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-200 glow-btn"
                    >
                      Porozmawiajmy o projekcie
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bottom-fade))' }}
        aria-hidden="true"
      />
    </section>
  )
}

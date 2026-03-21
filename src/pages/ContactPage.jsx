import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '../components/AnimateIn'

const sideItems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Odpowiem na Twoją wiadomość',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: 'Omówimy potrzeby firmy',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Przygotuję indywidualną wycenę',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: podłącz backend / Formspree / EmailJS
    setSubmitted(true)
  }

  const inputClass = (name) =>
    `w-full border rounded-xl px-4 py-3.5 text-sm transition-all duration-200 outline-none ${
      focused === name
        ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
        : 'border-[var(--border-input)] hover:border-[var(--border-medium)]'
    }`

  const inputStyle = {
    backgroundColor: 'var(--bg-input)',
    color: 'var(--text-strong)',
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-100 pointer-events-none" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.1] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1D4ED8, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">

        {/* Breadcrumb */}
        <AnimateIn variant="fadeIn" delay={0.05}>
          <nav className="flex items-center gap-2 text-xs mb-12" aria-label="Breadcrumb" style={{ color: 'var(--text-disabled)' }}>
            <Link
              to="/"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--text-disabled)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-disabled)'}
            >
              Strona główna
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: 'var(--text-muted)' }}>Kontakt</span>
          </nav>
        </AnimateIn>

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
              Kontakt
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight" style={{ color: 'var(--text-strong)' }}>
              Porozmawiajmy<br />
              <span className="text-gradient">o Twojej stronie</span>
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.22}>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Jeśli potrzebujesz nowej strony firmowej albo chcesz poprawić obecną,
              napisz do mnie. Sprawdzę, co można uprościć, poprawić i lepiej dopasować
              do Twojej oferty.
            </p>
          </AnimateIn>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Form – 3 cols */}
          <AnimateIn variant="fadeLeft" delay={0.25} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="card-dark rounded-2xl p-14 text-center"
                  style={{ border: '1px solid var(--border-input)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>Wiadomość wysłana</h2>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                    Dziękuję za kontakt. Odpiszę w ciągu 1–2 dni roboczych.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#60A5FA] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Wróć na stronę główną
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card-dark rounded-2xl p-8 space-y-5"
                  style={{ border: '1px solid var(--border-input)' }}
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                        Imię <span className="text-[#2563EB]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        placeholder="Jan"
                        className={inputClass('name')}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                        E-mail <span className="text-[#2563EB]" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        placeholder="jan@firma.pl"
                        className={inputClass('email')}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Nazwa firmy
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocused('company')}
                      onBlur={() => setFocused('')}
                      placeholder="Twoja Firma Sp. z o.o."
                      className={inputClass('company')}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Wiadomość <span className="text-[#2563EB]" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      placeholder="Opisz krótko, czego potrzebujesz — np. nowa strona firmowa, przebudowa istniejącej, optymalizacja pod SEO..."
                      className={`${inputClass('message')} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide glow-btn"
                  >
                    Wyślij wiadomość
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimateIn>

          {/* Side – 2 cols */}
          <AnimateIn variant="fadeRight" delay={0.3} className="lg:col-span-2">
            <div className="space-y-4">
              {/* What you get */}
              <div className="card-dark rounded-2xl p-7" style={{ border: '1px solid var(--border-input)' }}>
                <h2 className="text-sm font-bold mb-6" style={{ color: 'var(--text-strong)' }}>Co dalej?</h2>
                <ul className="space-y-5" role="list">
                  {sideItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center mt-0.5">
                        {item.icon}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Email direct */}
              <div className="card-dark rounded-2xl p-6" style={{ border: '1px solid var(--border-input)' }}>
                <p className="text-xs mb-1.5 font-medium" style={{ color: 'var(--text-subtle)' }}>Wolisz pisać bezpośrednio?</p>
                <a
                  href="mailto:kontakt@pajzerstudio.pl"
                  className="text-sm text-[#2563EB] hover:text-[#60A5FA] font-semibold transition-colors break-all"
                >
                  kontakt@pajzerstudio.pl
                </a>
              </div>

              {/* Back to home */}
              <div className="card-dark rounded-2xl p-6" style={{ border: '1px solid var(--border-input)' }}>
                <p className="text-xs mb-3 font-medium" style={{ color: 'var(--text-subtle)' }}>Chcesz najpierw zobaczyć ofertę?</p>
                <Link
                  to="/#oferta"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: 'var(--text-strong)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-strong)'}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Wróć do oferty
                </Link>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </div>
  )
}

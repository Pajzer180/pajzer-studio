import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from './AnimateIn'

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
    <section
      id="kontakt"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
      aria-labelledby="contact-heading"
    >
      <div className="section-divider mb-28 max-w-6xl mx-auto" aria-hidden="true" />

      {/* Background orbs */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[300px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2563EB, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <AnimateIn variant="fadeUp">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-4">
              Kontakt
            </span>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
              style={{ color: 'var(--text-strong)' }}
            >
              Porozmawiajmy<br />
              <span className="text-gradient">o Twojej stronie</span>
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed max-w-lg" style={{ color: 'var(--text-muted)' }}>
              Jeśli potrzebujesz nowej strony firmowej albo chcesz poprawić obecną,
              napisz do mnie. Sprawdzę, co można uprościć, poprawić i lepiej dopasować
              do Twojej oferty.
            </p>
          </AnimateIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Form – 3 cols */}
          <AnimateIn variant="fadeLeft" delay={0.1} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-dark rounded-2xl p-12 text-center"
                  style={{ border: '1px solid var(--border-input)' }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-strong)' }}>Wiadomość wysłana</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Dziękuję za kontakt. Odpiszę w ciągu 1–2 dni roboczych.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
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
                      rows={5}
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

          {/* Side box – 2 cols */}
          <AnimateIn variant="fadeRight" delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              {/* What you get */}
              <div className="card-dark rounded-2xl p-7" style={{ border: '1px solid var(--border-input)' }}>
                <h3 className="text-sm font-bold mb-6" style={{ color: 'var(--text-strong)' }}>Co dalej?</h3>
                <ul className="space-y-5" role="list">
                  {sideItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
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
                <p className="text-xs mb-1 font-medium" style={{ color: 'var(--text-subtle)' }}>Wolisz pisać bezpośrednio?</p>
                <a
                  href="mailto:kontakt@pajzerstudio.pl"
                  className="text-sm text-[#2563EB] hover:text-[#60A5FA] font-semibold transition-colors break-all"
                >
                  kontakt@pajzerstudio.pl
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

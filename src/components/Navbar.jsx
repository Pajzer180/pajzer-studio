import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const mainNavLinks = [
  { label: 'Oferta', href: '/#oferta', anchor: true },
  { label: 'Współpraca', href: '/#wspolpraca', anchor: true },
  { label: 'Kontakt', href: '/kontakt', anchor: false },
]

function NavItem({ link, active, theme }) {
  const [hovered, setHovered] = useState(false)

  const textColors = theme === 'dark'
    ? { active: '#FFFFFF', hovered: '#E2E8F0', default: '#94A3B8' }
    : { active: '#0F172A', hovered: '#1E293B', default: '#475569' }

  const inner = (
    <motion.span
      className="relative flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ color: active ? textColors.active : hovered ? textColors.hovered : textColors.default }}
      transition={{ duration: 0.18 }}
    >
      {/* Pill background */}
      <AnimatePresence>
        {(hovered || active) && (
          <motion.span
            key="bg"
            className="absolute inset-0 rounded-lg"
            style={{
              background: active
                ? 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 100%)'
                : 'var(--hover-bg-subtle)',
              border: active
                ? '1px solid rgba(37,99,235,0.25)'
                : '1px solid var(--border-soft)',
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* Active blue dot */}
      <AnimatePresence>
        {active && (
          <motion.span
            key="dot"
            className="relative w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <span className="relative">{link.label}</span>

    </motion.span>
  )

  return link.anchor
    ? <a href={link.href}>{inner}</a>
    : <Link to={link.href}>{inner}</Link>
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200"
      style={{
        color: 'var(--text-muted)',
        background: 'transparent',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--hover-bg-subtle)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
      aria-label={theme === 'dark' ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'}
    >
      {theme === 'dark' ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeAnchor, setActiveAnchor] = useState('')
  const location = useLocation()
  const isContactPage = location.pathname === '/kontakt'
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      if (isContactPage) return
      const sections = ['oferta', 'wspolpraca']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      setActiveAnchor(current || '')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isContactPage])

  const isActive = (link) => {
    if (!link.anchor) return location.pathname === link.href
    return activeAnchor === link.href.replace('/#', '')
  }

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
        boxShadow: scrolled ? '0 25px 50px -12px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Nawigacja główna"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: 'var(--text-strong)' }}
          aria-label="Pajzer Studio – strona główna"
        >
          Pajzer<span className="text-[#2563EB]">Studio</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <NavItem link={link} active={isActive(link)} theme={theme} />
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/kontakt"
              className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 glow-btn"
            >
              Skontaktuj się
            </Link>
          </motion.div>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="text-[var(--text-strong)] p-2 rounded-md transition-colors"
            style={{ color: 'var(--text-strong)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--hover-bg-subtle)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'var(--nav-mobile-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div className="px-6 pb-5 pt-3">
              <ul className="flex flex-col gap-1" role="list">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    {link.anchor ? (
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 text-sm font-medium py-2.5 px-3 rounded-md transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-strong)'; e.currentTarget.style.backgroundColor = 'var(--hover-bg-subtle)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = 'transparent' }}
                      >
                        {isActive(link) && <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 text-sm font-medium py-2.5 px-3 rounded-md transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-strong)'; e.currentTarget.style.backgroundColor = 'var(--hover-bg-subtle)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = 'transparent' }}
                      >
                        {isActive(link) && <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />}
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                onClick={handleLinkClick}
                className="mt-4 block text-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors glow-btn"
              >
                Skontaktuj się
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

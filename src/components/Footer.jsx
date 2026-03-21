import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-divider" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-block font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
              style={{ color: 'var(--text-strong)' }}
              aria-label="Pajzer Studio – strona główna"
            >
              Pajzer<span className="text-[#2563EB]">Studio</span>
            </Link>
            <p className="text-xs mt-1.5" style={{ color: 'var(--text-disabled)' }}>
              Strony firmowe dla małych firm i B2B
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Nawigacja stopki">
            <ul className="flex items-center gap-6" role="list">
              <li>
                <a
                  href="/#oferta"
                  className="text-xs transition-colors"
                  style={{ color: 'var(--text-disabled)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-disabled)'}
                >
                  Oferta
                </a>
              </li>
              <li>
                <a
                  href="/#wspolpraca"
                  className="text-xs transition-colors"
                  style={{ color: 'var(--text-disabled)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-disabled)'}
                >
                  Współpraca
                </a>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-xs transition-colors"
                  style={{ color: 'var(--text-disabled)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-disabled)'}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--text-footer)' }}>
            &copy; {new Date().getFullYear()} Pajzer Studio
          </p>
        </div>
      </div>
    </footer>
  )
}

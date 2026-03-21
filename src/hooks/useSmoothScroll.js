import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,           // długość animacji scrollu (sekundy)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      smooth: true,
      smoothTouch: false,      // na mobile zostaw natywny scroll
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Obsługa kliknięć w linki kotwicowe – płynne przewinięcie z opóźnieniem
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"], a[href^="/#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      const hash = href.startsWith('/#') ? href.slice(1) : href
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      lenis.scrollTo(target, {
        offset: -72,           // wysokość navbara
        duration: 1.6,         // czas przewinięcia do sekcji
        easing: (t) => t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2, // cubic ease-in-out
      })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
}

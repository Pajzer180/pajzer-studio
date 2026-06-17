# Zakładka — strona (landing, 4 podstrony)

Statyczna, wielostronicowa wizytówka aplikacji **Zakładka** (by Pajzer Studio).
Zero build-stepu — czyste HTML + jeden wspólny `styles.css`. Wrzucasz gdziekolwiek.

Design: handoff z Claude Design (font **Inter**, granat `#0A1330`, akcent `#33C3D0`).

## Pliki
- `index.html` — strona główna (hero: „Kilka pytań. Jedna idealna książka.")
- `jak-to-dziala.html` — jak działa (3 kroki + podgląd quizu)
- `korzysci.html` — korzyści (4 karty)
- `beta.html` — zapis do bety
- `styles.css` — wspólny system designu (tokeny, nav, stopka, komponenty, animacje)
- `favicon.svg` — ikonka (logo-zakładka)
- `logo-zakladka.svg` / `logo-zakladka-1024.png` — logo (do OG / sklepów)

Wspólny nav i stopka są w każdym pliku HTML (statycznie, bez include) i linkują
między podstronami. Przycisk **Dołącz do bety** prowadzi do `mailto:` — podmień na
formularz zapisu / link do testów Google Play, gdy ruszą.

## Podgląd lokalnie
Otwórz `index.html` w przeglądarce, albo:
```
cd "/Users/tomek/Desktop/Prywatny/landing-page16.06"
python3 -m http.server 8080   # → http://localhost:8080
```

## Hosting + domena `zakladka.pajzerstudio.pl`
Dowolny hosting statyczny (Netlify / Vercel / Cloudflare Pages / GitHub Pages).
W DNS domeny `pajzerstudio.pl` dodaj rekord **CNAME** `zakladka` wskazujący na
adres z hostingu. Po propagacji strona żyje pod `https://zakladka.pajzerstudio.pl`.

Ta strona pełni też rolę **źródła afiliacji** — podajesz jej adres przy
rejestracji w sieciach (Awin/Legimi, TradeDoubler/Empik, Adtraction/Storytel).

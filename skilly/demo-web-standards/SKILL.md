---
aliases: [demo-web-standards]
name: demo-web-standards
description: Standardy demo webů Uptoai (standard a premium tier). Použij při stavbě, přepracování nebo kontrole demo webu.
---

# Standardy demo webů

Cíl: majitel firmy otevře odkaz a do 5 sekund si řekne "tohle chci". Nikoho nesmí napadnout, že web dělala AI.

## A. Tvrdá pravidla (porušení = web neprojde QA)
1. **Žádné emoji** nikde v obsahu, ikonách ani tlačítkách. Ikony jen jako SVG (Lucide, Phosphor) a střídmě.
2. **Žádná stopa nástroje.** Žádné Lovable, "built with", generátor v meta tagu.
3. **Jen pravdivé údaje z dossieru.** Telefon, adresa, hodiny, ceny, jména, recenze. Co v dossieru není, na webu není. Žádné vymyšlené recenze, čísla ani roky praxe.
4. **Žádné placeholdery:** "Jméno Příjmení", "[email]", "123 456 789", "Lorem ipsum", "Vaše firma", "Popis služby".
5. **Povinné funkce z dossieru.** Když měl starý web rezervaci, nový ji má taky (vložený widget nebo odkaz na jejich systém). Když nabízíme rezervaci, demo má funkční rezervační formulář: výběr služby, datum, čas, jméno, telefon, potvrzovací obrazovka.
6. **Fotky klienta first.** Minimálně 6 fotek, z toho všechny dostupné dobré fotky klienta. Unsplash jen doplněk, nikdy AI ilustrace s textem nebo deformacemi.
7. **Patička:** logo nebo název, adresa s odkazem na mapu, telefon (tel:), e-mail (mailto:), otevírací doba, sociální sítě, IČO, mapa (Google Maps embed nebo statický odkaz). Žádná prázdná patička.
8. **Demo má `noindex`.** `<meta name="robots" content="noindex">`.

## B. Struktura prodejní landing page (oba tiery)
1. **Hero:** konkrétní nadpis (služba + město nebo hlavní přínos), podnadpis s důkazem (hodnocení, roky, specializace), primární CTA (Rezervovat / Zavolat), sekundární CTA. Velká fotka klienta.
2. **Důkaz hned pod hero:** hodnocení z Google, počet recenzí, 3 krátké citace.
3. **Služby s cenami** (karty bez emoji, s fotkou nebo jemnou ikonou).
4. **Proč my:** 3 až 4 konkrétní důvody z dossieru, ne fráze.
5. **Galerie prací** (fotky klienta).
6. **O nás / tým** se jmény, pokud jsou v dossieru.
7. **Recenze** doslovně se jménem.
8. **FAQ:** 4 až 6 otázek, které zákazníci reálně řeší (cena, parkování, jak dlouho to trvá, platba kartou). Jen odpovědi z dossieru.
9. **Rezervace nebo kontakt** s formulářem.
10. **Patička** podle A7.
- Sticky header s telefonem a CTA. Na mobilu tlačítko "Zavolat" vždy po ruce.

## C. Design
- Typografie: výrazný nadpisový font + čitelný textový (Google Fonts). Beauty: Cormorant Garamond, Playfair, Fraunces. Právo a finance: Libre Caslon, Inter Tight. Auto a řemesla: Barlow Condensed, Archivo. Nikdy samotný Inter, Roboto nebo Arial.
- Barvy odvozené z loga a fotek klienta, max 1 akcentová barva. Hodně prostoru, velká typografie, asymetrie, překryvy fotek. Ne "3 karty vedle sebe s ikonou" všude.
- Mikrointerakce: jemný fade a posun při scrollu (IntersectionObserver), hover stavy, plynulé přechody. Respektuj `prefers-reduced-motion`.
- Výkon: fotky WebP, `loading="lazy"`, LCP pod 2,5 s, žádné těžké knihovny ve standard tieru.

## D. Premium tier (navíc)
Cíl: "wow" efekt jako produktové stránky Apple. Vyber jeden hlavní efekt podle oboru, nepřeplácat:
1. **Scroll image sequence (Apple efekt):** video produktu nebo prostoru (start frame → end frame) rozložené na 60 až 120 snímků WebP, vykreslené na `<canvas>` podle pozice scrollu (GSAP ScrollTrigger, sticky sekce). Zdroj videa: video klienta, nebo vygenerované přes Runware (obrázek start a konec, pak image-to-video). Celková velikost snímků max 4 MB, na mobilu poloviční rozlišení.
2. **3D vrstvy a parallax:** fotky klienta ve vrstvách s hloubkou (CSS `perspective`, GSAP), které se při scrollu rozjíždějí. Vhodné pro salony a interiéry.
3. **WebGL akcent (Three.js):** jemný 3D objekt nebo shader na pozadí hero (tekutý gradient, částice). Vhodné pro právníky a architekty, kde chybí fotky.
- Plynulý scroll (Lenis), text reveal po řádcích, sticky storytelling sekce, kurzor efekty jen na desktopu.
- Fallback bez JS a pro `prefers-reduced-motion`: statická verze, která pořád vypadá skvěle.

## E. Viditelnost pro AI vyhledávače (GEO) a SEO
- JSON-LD `LocalBusiness` (nebo podtyp: `BeautySalon`, `AutoRepair`, `LegalService`, `Dentist`): name, address, geo, telephone, openingHoursSpecification, priceRange, sameAs, `aggregateRating` jen s reálnými čísly z dossieru.
- JSON-LD `FAQPage` z FAQ sekce, `Service` pro hlavní služby.
- Sémantické HTML (header, main, section s nadpisy h2, footer), jeden h1 se službou a městem.
- Title do 60 znaků (služba, firma, město), meta description do 155 znaků, Open Graph obrázek.
- Odstavec "O firmě" psaný fakticky (kdo, co, kde, od kdy, pro koho), aby ho AI mohla citovat.
- Soubor `llms.txt` vedle `index.html` s fakty o firmě.

## F. Checklist před odevzdáním (Builder) a při kontrole (QA)
- [ ] Žádné emoji (`grep -P '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]'` nic nenajde)
- [ ] Žádné placeholdery a zakázané fráze
- [ ] Každý údaj sedí s dossierem (telefon, adresa, hodiny, ceny)
- [ ] Povinné funkce z dossieru jsou na webu a fungují
- [ ] Minimálně 6 fotek, fotky klienta použité
- [ ] Patička kompletní
- [ ] JSON-LD validní, h1, title, description
- [ ] Mobil 390 px bez vodorovného scrollu, CTA viditelné
- [ ] Premium: hlavní efekt běží plynule a má fallback
- [ ] `noindex`

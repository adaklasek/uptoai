# Redesign Brief: uptoai.cz

*Analýza 9 agenturních webů + konkrétní doporučení pro UpToAI*

---

## Co je špatně na současném webu

Aktuální uptoai.cz trpí tzv. **AI agency generic syndrome**: tmavé pozadí, obří tučný titulek, neonový CTA button, gradient. Přesně to, co dělají stovky dalších AI agentur. Žádná osobnost, žádný koncept. Vypadá jako Lovable šablona v noci.

Konkrétní problémy:
- Font: zkondenzovaný bold sans (Barlow Condensed?) — působí agresivně a genericky
- Barvy: #0d1117 + teal/blue — klasická "AI startup" paleta bez nápadu
- Layout: hero přes celou šířku, statistiky widgetu vpravo — přehlcené
- Žádný sociální důkaz v hero (loga klientů, recenze, čísla)
- CTA "Chci bezplatný audit" — nezní jako prémiová agentura

---

## Analýza referenčních webů

### Co funguje u nejlepších

| Web | Koncept | Co beru za inspiraci |
|-----|---------|----------------------|
| **Frankenstein Digital** | Světlé pozadí, obří serif + zelený accent | Serif headline + barevný accent na klíčové slovo, logo grid vpravo |
| **WebRefresh** | Světlý lavender gradient, reviews badge, testimonial card | Reviews badge nad headline, testimonial hned v hero, serif s barevným gradient accent |
| **BrainBuddy** | Tmavý navy, neon lime, terminálová estetika | Silný claim v jedné větě, monospace + bold, live demo widget |
| **GoEnvy** | Černo-neonový pop-art collage | Odvaha mít vyhraněný vizuální koncept |
| **RedSearch** | Kontaktní formulář přímo v hero | Konverzní prvky hned v hero |
| **Heavyweight** | Team foto, partneri badges | Badges (Google Partner atd.) v hero |

### Klíčové vzorce u nejlepších webů

1. **1 velký claim** (ne 3 marketingové věty) — "ASK AI WHO TO CALL. ONE ANSWER." ne "Pomáháme firmám digitálně transformovat jejich procesy..."
2. **Jeden jasný CTA** nad folds — ne 3 tlačítka vedle sebe
3. **Sociální důkaz v hero** — buď recenze badge, loga klientů, nebo čísla
4. **Čistý nav** — 4-5 položek + CTA tlačítko, nic víc
5. **Logo bar pod hero** — trustový most mezi heroem a services
6. **Breadth of proof** — kde jsi publikovaný, certifikace, ocenění

---

## Doporučený redesign UpToAI

### Koncept: "Systémový přístup"

UpToAI není generická AI agentura. Je to firma, která **staví fungující systémy** pro konkrétní výsledky. Web musí vypadat jako výstup inženýrské práce — přesný, systematický, čitelný — ne jako agenturní marketing.

Inspirace: **Linear.app** estetika (clean, precise, product-studio feel) kombinovaná s **editorial serif** typografií jako má Frankenstein.

---

### Paleta

```
Primární pozadí:  #FAFAF8  (teplá bílá, ne studená)
Text hlavní:      #0C0F1A  (near-black s modrým podtónem)
Accent hlavní:    #2D6A4F  (tmavá lesní zelená — prémiová, česká, ne tech-bro)
Accent hover:     #52B788  (světlejší zelená)
Sekce bg:         #F3EFE8  (teplý cream pro střídání sekcí)
```

**Proč zelená?** Většina AI agentur dělá blue, purple nebo neon. Tmavá zelená vypadá jinak, zapamatovatelně, a v kontextu "firmy, které vám rostou" funguje sémanticky i vizuálně.

---

### Typografie

**Headline font:** `Fraunces` (Google Fonts)
- Variabilní optický serif — na velkých velikostech vypadá nadčasově, není to "obyčejný serif"
- [fonts.google.com/specimen/Fraunces](https://fonts.google.com/specimen/Fraunces)
- Variace: `wght 600-800`, `WONK 1` pro display

**Body font:** `Inter` (Google Fonts)
- Standard pro čitelnost, nikdo to nepozná ale všichni to ocení

**Fallback kombinace (jednodušší):** `DM Serif Display` + `DM Sans`

---

### Hero sekce

**Aktuálně:** Obří dark hero, tučný condensed titulek, stats widget vpravo

**Nový návrh:**

```
[NAV: Logo   Služby   Jak to funguje   Case studies   Blog    [Bezplatný audit →]]

──────────────────────────────────────────────────────
[Malé badge: 🏆 TOP AI AGENTURA – česky 2025]

Automatizace,
která skutečně
funguje.           [testimonial card (pravá strana):
                    ⭐⭐⭐⭐⭐ "Ušetřili jsme 40h/týden"
                    — Jan Novák, CEO Firma s.r.o.]

Stavíme AI agenty a automatizace pro české firmy.
Výsledky do 6 týdnů, nebo vrátíme peníze.

[Chci bezplatný audit →]    [Jak to funguje]

──────────────────────────────────────────────────────
[Logo bar: klienti nebo "Automatizujeme firmy jako:"]
```

**Klíčové změny:**
- Světlé pozadí (#FAFAF8), ne tmavé
- Fraunces serif, ne condensed sans
- Testimonial card v hero (jako WebRefresh)
- Jeden silný claim ve 3 slovech, jeden doplňující sentence
- Trust badge nad headline
- Logo bar pod hero

---

### Struktura stránek (sekce v pořadí)

1. **Hero** (popsáno výše)
2. **Logo bar** — "Automatizujeme firmy jako:" + 5-6 log klientů
3. **Problem section** — "Dělate věci ručně, které by za vás dělala AI" — 3 pain pointy
4. **Services grid** — 3 karty: AI Agenti / Automatizace / Implementace; každá s ikonou, popisem, cenou "od X Kč"
5. **How it works** — 3 kroky s číslicemi: Audit → Návrh → Spuštění
6. **Case study** — 1 featured výsledek, konkrétní čísla (ne bullshit marketing speak)
7. **Pricing** — 3 balíčky jasně, ne "kontaktujte nás pro cenu"
8. **FAQ** — 5-7 otázek, accordeon
9. **Final CTA** — "Zamluvte si bezplatný audit" + Calendly embed nebo formulář
10. **Footer** — kontakt, social, © UpToAI 2025

---

### Navigace

```
Logo  |  Služby  Jak to funguje  Výsledky  Blog  |  [Bezplatný audit →]
```

CTA tlačítko: tmavě zelená (#2D6A4F) s bílým textem, border-radius 6px (ne pilulka)

---

### Co NEDělat

- Žádné full-screen dark hero s glowing accents
- Žádné animace pro animace (particle efekty, floating blobs)
- Žádné 3 různé CTA tlačítka v hero
- Žádný condensed/bold sans jako headline font
- Žádné "AI zbastlené" stock fotky robotů nebo mozků

---

### Inspirační referencias pro Adama

| Stránka | Co si z toho brát |
|---------|-------------------|
| frankensteindigital.com | Světlé bg + serif + barevný accent + logo grid |
| www.webrefresh.co | Testimonial v hero + reviews badge + gradient accent na slovo |
| brainbuddy.ai | Silný jednořádkový claim, odvaha být jiný |
| linear.app | Celková přesnost a čistota produktové estetiky |

---

## Akční kroky

1. **Adam schvaluje** paletu + font + hero strukturu
2. Postavím novou verzi v Lovable (nebo přímo upravím GitHub Pages repo)
3. Adam reviewne na telefonu i desktopu
4. Deploy

*Odhadovaný čas buildu: 2-3 hodiny práce*

# Blog Writing Guidelines – UpToAI

Instrukce pro agenta, který píše články pro uptoai.cz/blog/.
Zachovávají Adamovu zpětnou vazbu z 1.–2. 11. 2026.

---

## Hlas a styl

- Píšu jako Adam Klásek – přátelský, přímý, konkrétní, bez omáček
- Krátké odstavce (2–4 věty max)
- Žádné korporátní fráze: "V dnešní době", "V éře AI", "Moderní svět"
- Žádné prázdné konstatování: "AI mění byznys" (říká to každý, nic to neznamená)
- Žádné fráze znějící jako ChatGPT: "Ne deset modrých linek.", "Klíč k úspěchu je...", "Připravte se na..."
- Konkrétní čísla, nástroje, příklady z praxe

## Klíčová slova (přirozeně, ne keyword stuffing)

Primární: `AI agenti`, `automatizace procesů`, `Make.com`, `n8n`, `Claude AI`
Sekundární: `automatizace pro OSVČ`, `automatizace pro freelancery`, `GEO optimalizace`, `automatizace e-mailů`, `AI pro malé firmy`
Long-tail: `jak postavit AI agenta`, `automatizace CRM Make.com`, `jak začít s automatizací`

Každý článek musí obsahovat alespoň 3 primární klíčová slova přirozeně v textu.

## Struktura článku

```
Title: [Klíčové slovo] – praktický návod / [konkrétní výsledek]
Meta description: max 155 znaků, obsahuje hlavní klíčové slovo, jasný benefit
Canonical: https://uptoai.cz/blog/[slug]/

H1: Stejný nebo velmi blízký title
Lead (první odstavec): Věcný, bez sentencí. Říká co dostaneš. Obsahuje klíčové slovo.
H2 sekce: 4–6 sekcí, každá s konkrétním obsahem
CTA: Formální Vy. "Chcete vědět, jak na tom jste konkrétně Vy?"
```

## Zakázané věci

- Sekce "Co udělat hned teď" – to je interní know-how, každý klient to má jiné
- Sekce "Kolik času to zabere reálně" – spekulace bez reálných dat
- Obecné seznamy "5 důvodů proč..." bez konkrétního obsahu
- Bullet pointy s obecnostmi ("AI šetří čas", "Automatizace zvyšuje efektivitu")
- Fiktivní příklady bez uvedení, že jsou ilustrativní

## Zdroje a citace

- Vždy odkazovat na konkrétní zdroje s reálnými URL
- Odkaz formát: `<a href="URL" target="_blank" rel="noopener">popis zdroje</a>`
- Preferované zdroje: Semrush, McKinsey, Gartner, oficiální dokumentace nástrojů
- Žádné "podle výzkumů" bez konkrétního odkazu

## CTA (výzva k akci)

Formální "Vy" forma:
```html
<h2>Chcete vědět, jak na tom jste konkrétně Vy?</h2>
<p>Zdarma se podívám na Vaši online situaci a navrhnu konkrétní řešení. Bez závazku.</p>
<a class="cta-btn" href="https://calendly.com/adaklasek/meet" target="_blank">Nezávazně se poradit →</a>
```

Nikdy: "Kontaktujte nás", "Napište nám", "Chcete vědět více?" (obecné)

## SEO checklist před publishem

- [ ] Title obsahuje hlavní klíčové slovo
- [ ] Meta description max 155 znaků s klíčovým slovem
- [ ] H1 = title (nebo velmi blízký)
- [ ] Canonical URL nastaven
- [ ] OG tagy vyplněny
- [ ] Schema.org Article markup s datePublished, author
- [ ] Interní odkaz na /#booking nebo /#sluzby
- [ ] Alespoň jeden reálný externý odkaz se zdrojem
- [ ] Slug je lidsky čitelný: `/blog/jak-postavit-ai-agenta/`

## GEO (Generative Engine Optimization)

Každý článek by měl být strukturovaný tak, aby ho citovaly AI vyhledávače (ChatGPT, Perplexity):
- Definuj termíny explicitně: "AI agent je program, který..."
- FAQ sekce s přirozenými otázkami a konkrétními odpověďmi
- Konkrétní fakta s čísly a zdroji
- Jméno autora (Adam Klásek) v metadatech

## HTML šablona

Každý článek je samostatný soubor v `/blog/[slug]/index.html`.
Používá stejné CSS jako web (`/style.css`).
Obsahuje navigaci se zpět-linkem na `/blog/`.

### Povinné meta tagy
```html
<title>[Název článku] | Blog UpToAI</title>
<meta name="description" content="[Max 155 znaků]">
<link rel="canonical" href="https://uptoai.cz/blog/[slug]/">
<meta property="og:title" content="[Název]">
<meta property="og:type" content="article">
<meta property="article:published_time" content="YYYY-MM-DD">
<meta property="article:author" content="Adam Klásek">
```

### Schema.org Article
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "YYYY-MM-DD",
  "author": {
    "@type": "Person",
    "name": "Adam Klásek",
    "url": "https://uptoai.cz"
  },
  "publisher": {
    "@type": "Organization",
    "name": "UpToAI",
    "url": "https://uptoai.cz"
  }
}
```

---

## Co není cílem

- Dávat klientům kompletní návod, aby to zvládli sami
- Psát o věcech, které Adam ještě nezná z vlastní praxe
- Kopírovat obsah konkurence nebo překládat zahraniční články

## Co je cílem

- Pozicovat Adama jako experta na AI automatizaci v ČR
- Dostat uptoai.cz do výsledků pro hledané termy
- Získat citace v ChatGPT/Perplexity pro dotazy o AI automatizaci v ČR
- Generovat leady přes organiku (lidé čtou → důvěřují → bookují audit)

# UpToAI – Web Strategy Brief

*Verze: 1.11.2026 | Autor: CEO Agent + Adam Klásek*

---

## Situace: co je teď špatně

Web technicky existuje, ale nefunguje jako prodejní nástroj:

- **SEO/GEO**: klíčová slova jsou, ale obsah není dost autoritativní. AI asistenti (ChatGPT, Perplexity, Google AI Overview) web nereferencují – nemáme blog, žádné citovatelné zdroje, žádnou "odbornost na papíře".
- **Vypadá AI**: generická struktura, generické headliny, žádná osobnost.
- **Žádné logo**: nav je jen text "UpToAI" bez vizuální identity.
- **Nulová důvěra**: čísla (32h, 3×, 14 dní) jsou bez zdroje. Žádné reálné recenze, žádné case studies, žádná tvář.
- **Nabídka není přesvědčivá**: není cenová kotva, není FOMO, není garance správně podaná.
- **Nulová personalizace**: Adam neexistuje. Tým neexistuje. Firma je anonymní.

---

## Prioritní změny (v pořadí dopadu)

### 1. Tvář firmy – Adam + tým (HIGH PRIORITY)
**Co chybí**: foto Adama, krátké bio, proč dělá AI automatizace, co ho na tom baví.
**Proč to vydělává**: people buy from people. Agentura bez tváře = největší nevýhoda oproti 1-person konzultantům.
**Akce**:
- Profesionální fotky Adama (nebo dobrý smartphone portrét)
- Sekce "Kdo jsme" s Adamovým příběhem (1 odstavec, přirozený tón)
- Pokud máte spolupracovníky – přidat i je

### 2. Irresistible Offer (HIGH PRIORITY)
**Koncept** (připraveno k implementaci):

```
Normální cena: 90 000 Kč
Prvních 10 klientů: 45 000 Kč (50% sleva)
Zbývají místa: 4 z 10

Garance: Pokud automatizace nepřinese měřitelnou úsporu do 60 dní,
pracujeme zadarmo dokud se to nestane.
```

**Cenová kotva logika**:
- Průměrný ČR podnikatel si fakturuje 1 500–2 500 Kč/h
- Ušetří 15h/týdně = 22 500–37 500 Kč/týdně = 1,2–2M Kč/rok
- Implementace za 45 000 Kč se vrátí do 2–3 týdnů
- "Proč platíte asistentku 30k/měs, když AI to udělá za 45k jednou?"

**FOMO prvky**:
- "Nenechte konkurenci, aby vás předběhla. Každý měsíc odkladu = 90 000 Kč v ušetřeném čase, který vám utekl."
- "AI je dál, než si myslíte. Vaši konkurenti to už testují."
- Countdown nebo počítadlo zbývajících míst (4 z 10)

### 3. Social proof – recenze + case studies (HIGH PRIORITY)
**Minimum viable**:
- 3–5 reálných recenzí (stačí WhatsApp screenshoty + přepis)
- 1–2 case studies ve formátu: Firma X → problém → co jsme udělali → výsledek
- Loga firem kde to dává smysl

**Case study šablona**:
```
[Název oboru, ne firmy pokud nechce být jmenována]
Problém: Každý den 3 hodiny manuálního zadávání objednávek.
Řešení: Napojení e-shopu na CRM + automatické potvrzení zákazníkovi.
Výsledek: 0 hodin manuální práce, -1 chyba týdně, +12h volného času.
```

### 4. Blog / Content hub (MEDIUM – dlouhodobý dopad)
**Proč je to zásadní pro GEO**:
AI asistenti citují zdroje, které jasně odpovídají na otázky. Blog s konkrétními odpověďmi = UpToAI se dostane do AI odpovědí, ne jen do Google.

**Plán: 1 článek každé 2 týdny**

| # | Téma | Klíčová slova | GEO cíl |
|---|------|---------------|---------|
| 1 | Jak se stát důvěryhodným pro AI vyhledávače (GEO pro firmy) | GEO, AI vyhledávač, ChatGPT doporučuje, AI citations | "Jak mě AI doporučí zákazníkům?" |
| 2 | Jak poznám, co stojí za to automatizovat? | co automatizovat, ROI automatizace, automatizace pro firmy | "Kdy se automatizace vyplatí?" |
| 3 | Jak si vytvořím svého prvního AI agenta? | první AI agent, Make.com, n8n návod, AI workflow | "Jak začít s AI automatizací?" |
| 4 | AI chatbot vs. živý zákaznický servis – kdy co | AI chatbot, zákaznický servis AI, automatizace podpory | "AI zákaznická podpora" |
| 5 | 5 procesů, které každá firma zbytečně dělá ručně | automatizace procesů, ruční práce AI, ušetřit čas | "Co mohu automatizovat?" |
| 6 | Kolik stojí AI automatizace? Reálná čísla | cena automatizace, Make.com cena, n8n cena | "Cena AI automatizace" |

**Blog formát**: 1 200–1 800 slov, konkrétní příklady, screenshot nebo diagram, autor Adam Klásek (foto + bio).

**Cross-platform**:
- Blog → LinkedIn článek (zkrácená verze)
- Blog → LinkedIn carousel (5–7 slidů)
- Blog → Newsletter (intro + link)
- 3 blogy → e-book "AI průvodce pro české podnikatele"

### 5. SEO/GEO technické zlepšení (MEDIUM)

**Co přidat**:
```html
<!-- Author schema pro každý blog post -->
<script type="application/ld+json">
{
  "@type": "Person",
  "name": "Adam Klásek",
  "jobTitle": "AI Automatizační Specialista",
  "url": "https://uptoai.cz",
  "sameAs": ["https://www.linkedin.com/in/adamklasek"]
}
</script>

<!-- Article schema pro blogy -->
<script type="application/ld+json">
{
  "@type": "Article",
  "headline": "...",
  "author": {"@type": "Person", "name": "Adam Klásek"},
  "datePublished": "...",
  "publisher": {"@type": "Organization", "name": "UpToAI"}
}
</script>
```

**LLMs.txt** (GEO – pro AI crawlery): soubor `/llms.txt` je dobrý start, ale musí být naplněn obsahem.

**Rychlá SEO vítězství**:
- Přidat Google Business Profile (pokud není)
- Přidat firmu do katalogů: Firmy.cz, Živéfirmy.cz, SlovníkAI.cz
- Zmínky na LinkedIn, oborová fóra

### 6. Logo + vizuální identita (MEDIUM)
Aktuálně: jen text "UpToAI" v navbaru.
Potřeba: SVG logo s jednoduchým symbolem. Varianty: light/dark, favicon, OG image.

### 7. Sociální sítě (LOW – začít po fixu webu)
**Priorita**: LinkedIn (B2B, české firmy)
**Strategie**: 2–3 posty týdně, vždy value-first (ne promo)
- Case study breakdown
- "Dnes jsem pomohl firmě automatizovat X" (behind the scenes)
- LinkedIn carousel z každého blogu
- Sdílení milníků (první klient, první automatizace, apod.)

**Instagram/TikTok**: až po LinkedIn. Jiný formát, jiné publikum.

---

## Nová struktura webu (navrhovaná)

```
1. HERO – jasné USP + headline od Adama, ne generické
2. SOCIAL PROOF BAR – loga nebo "pracoval jsem s X firmami v těchto oborech"
3. PROBLÉM (agitace) – co firmy každý den ztrácejí
4. ŘEŠENÍ – co konkrétně děláme (3 služby)
5. CASE STUDIES – 2–3 konkrétní příběhy s čísly
6. IRRESISTIBLE OFFER – cena, kotva, FOMO, zbývající místa
7. GARANCE – konkrétní, bez bulshitu
8. O NÁS – Adam + tým, foto, příběh
9. JAK PRACUJEME – 4 kroky (already exists, refine)
10. RECENZE – reálné, s jménem/firmou
11. FAQ – already exists, expand
12. BLOG PREVIEW – 3 nejnovější články
13. CTA – booking
```

---

## Technická architektura webu

**Aktuální stack**: GitHub Pages (statický HTML) – dobré pro rychlost, omezené pro blog.

**Doporučení pro blog**:
- Option A: Přidat `/blog/` složku s HTML soubory pro každý článek (jednoduchý, GitHub Pages friendly)
- Option B: Přejít na Astro.js nebo 11ty (static site generator s Markdown blogy)
- **Doporučuji Option A** pro rychlý start: blog/index.html (přehled), blog/[slug]/index.html (článek)

---

## Web Agent – co bude dělat

Scheduled task (Claude Code) spouštěný každé 2 týdny:

1. Dostane téma z fronty (Airtable nebo CLAUDE.md)
2. Prohledá web pro aktuální data k tématu
3. Napíše článek (1 200–1 600 slov, Adamův styl, česky)
4. Uloží jako HTML do `/blog/[slug]/index.html`
5. Aktualizuje `/blog/index.html` (přehled)
6. Aktualizuje sitemap
7. Notifikace Adamovi přes Telegram k review + commit

Adam review → commit → GitHub Pages deploy (automaticky).

---

## Okamžité akce (toto týden)

**Adam musí dodat** (bez toho agent nemůže):
- [ ] 1–3 fotky (Adamova tvář, lze smartphone)
- [ ] 2–3 reálné recenze od reálných klientů nebo testérů (i kamarádi z businessu)
- [ ] 1 case study (klidně anonymizovaná)
- [ ] Potvrdit finální text "irresistible offer" (počet zbývajících míst, garantii)
- [ ] LinkedIn profil URL pro sameAs schema

**Já udělám** (bez vstupu od Adama):
- [x] Tento brief
- [ ] Blog infrastruktura (složky, index)
- [ ] Blog Agent (scheduled task každé 2 týdny)
- [ ] Vylepšit SEO/schema.org na aktuálním webu
- [ ] První blog článek: "Jak se stát důvěryhodným pro AI vyhledávače"

---

## Metriky úspěchu (6 měsíců)

- Google Search Console: +50% impressions z long-tail keywords
- Počet AI citations (ChatGPT, Perplexity): aspoň 1 zmínka měsíčně
- Blog čtečnost: 500+ unique visitors/měsíc na blog
- Konverze: 2+ nových leadů/měsíc z webu (teď 0)
- LinkedIn: 500+ followers, 3–5% engagement rate

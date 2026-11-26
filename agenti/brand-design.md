---
agent: brand-design
nazev_v_behy: Brand & Design
stav: aktivni
platforma: Claude úloha trig_011ZQc9EsYHtnWEvS7pBkSyN
spousti: Po-Pá 11:00, 14:00, 17:00
vstup: leady se Status draft_web a prázdným design_brief
vystup: design_brief (JSON), hero_image_url, push Adamovi
limit: 2 leady za běh
predchozi: "[[lead-analyst]]"
dalsi: "[[web-builder]]"
---

# Brand & Design

Pro leady ve stavu `draft_web` vytvoříš design brief a hero obrázek. Nejvýš 2 leady za běh. Status neměníš.

## Postup
1. **Leady.** Airtable Leads, Status = "draft_web" a `design_brief` prázdné. Pole: Name, Status, Web, City, Industry, Notes, Email, design_brief, hero_image_url, demo_url. Když žádný nevyhovuje, skonči.
2. **Research** (WebSearch, WebFetch): co firma dělá, jak vypadá jejich web, recenze, konkurence, vizuální standardy oboru.
3. **Design brief** jako JSON s poli: company_name, industry, target_customer, brand_personality, tone_of_voice, key_message, color_palette {background, primary, accent, text, rationale}, typography {heading, body, rationale}, imagery_style, industry_standards {must_have_sections, trust_signals, cta_primary, avoid}, hero_copy {h1, subheadline, cta}, sections_recommended, hero_image_prompt (anglicky, 16:9, no text, no logos), research_notes, website_analyzed.
   - V hero_copy jsou zakázané fráze: "Objevte krásu", "komplexní řešení", "na míru", "inovativní", "Neváhejte", "dopřejte si".
   - Když web nebo recenze nenajdeš, označ podklady jako omezené.
4. **Hero obrázek** přes Runware (Bash curl, model `runware:100@1`, 1024x576, WEBP, klíč v `RUNWARE_API_KEY`). Když klíč chybí nebo volání selže, ulož brief bez obrázku.
5. **Zápis** do `design_brief` (JSON jako text) a `hero_image_url`.
6. **Notifikace.** PushNotification se souhrnem: firma, paleta, fonty, tón.

## Známé problémy (26.11.2026)
- 39 leadů `draft_web` nemá web ani core_business. Agent správně odmítá psát brief z domněnek, ale pipeline proto stojí. Řešení: Lead Analyst nebo Enrichment musí u `draft_web` leadů dohledat aspoň Google Maps profil, recenze, fotky a kontakt.

## Změny
- 2026-11-26: přesunuto z nastavení úlohy do repa.

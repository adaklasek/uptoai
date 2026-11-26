---
agent: enrichment
nazev_v_behy: Enrichment
stav: aktivni (nahradí ho lead-analyst)
platforma: Claude úloha trig_013Ltf8Bt8LqzBrKMFDcigFL
spousti: Po-Pá 10:37 a 14:37
vstup: leady s prázdným Email, Phone, City, Web, Industry nebo core_business
vystup: jen prázdná pole + enriched_at, Status nemění
limit: 8 leadů za běh
skilly: [[lead-enrichment]]
---

# Enrichment

Doplňuješ chybějící údaje o leadech a shrnuješ jejich byznys. Status neměníš.

## Výběr leadů (max 8 na běh)
- Leady, kde je prázdné aspoň jedno z: Email, Phone, City, Web, Industry, core_business. Vynech Status "lost" a "active".
- Priorita: nejdřív prepared, draft_web, draft_automation, sent, remind, reminded, potom ostatní.
- Leady bez webu a bez telefonu přeskoč, pokud nemají ani Name a City, ze kterých něco dohledáš.

## Pravidla zápisu
- Zapisuj jen do prázdných polí. Existující hodnoty nikdy nepřepisuj.
- **Email:** jen obchodní e-mail firmy z jejího vlastního webu (kontakt, patička). Nikdy adam@uptoai.cz, ester@uptoai.cz, warmup adresy, example.com ani e-maily z našich demo webů.
- **Phone:** formát +420 xxx xxx xxx, jen z webu firmy nebo z ověřeného profilu firmy.
- **Web:** jen skutečný web firmy. Nikdy demo doménu (*.lovable.app), ta patří do demo_url.
- **City:** město, kde firma sídlí nebo poskytuje služby.
- **Industry:** jen přesná hodnota ze seznamu: zubari, autoservisy, kadernictvi, it, ecommerce, ostatni, kosmetika, restaurace, fitness, instalateri, elektrikari, veterinari. Jinak prázdné.
- **core_business:** 1 až 3 věty česky: co firma dělá, pro koho a kde. Jen z webu firmy.
- **enriched_at:** když jsi cokoliv zapsal, aktuální čas.

## Limity
- Na lead nejvýš 2 načtení stránek a 1 vyhledávání.
- Když se stránka nenačte (DNS, timeout, 404, 503), lead přeskoč a uveď to v Běhy.

## Změny
- 2026-11-26: přesunuto z nastavení úlohy do repa.

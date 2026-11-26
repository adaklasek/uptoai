---
agent: instagram-outreach
nazev_v_behy: Instagram Outreach
stav: aktivni
platforma: Claude úloha trig_01Tk9xZukqbL6rWCeASwBFmB
spousti: Po-Pá 8:30
vystup: 10 profilů s DM, push Adamovi, odesílá Adam ručně
---

# Instagram Outreach

Najdeš 10 potenciálních klientů na Instagramu (česky mluvící živnostníci a malé firmy) a pro každého připravíš personalizovanou zprávu. Adam ji odešle ručně z profilu Uptoai nebo Ester.

## Obor dne
- Pondělí: kadeřnictví, kosmetika, nail art
- Úterý: instalatéři, elektrikáři, řemeslníci
- Středa: autoservisy, pneuservisy
- Čtvrtek: realitní makléři, architekti
- Pátek: restaurace, kavárny, catering

## Hledání
- `site:instagram.com [obor] czech OR česky OR praha OR brno OR ostrava`
- nebo `instagram profil [obor] česká republika živnostník`
- Cíl: 10 profilů, které jsou viditelně český business účet, malá nebo střední firma, aktivní, pravděpodobně bez automatizace nebo jen s jednoduchým webem.
- Když je výsledků málo, zkus jiné dotazy nebo jiný obor ze seznamu.

## DM (styl Ester Tomancové)
Krátká, přátelská, bez omáček, max 3 až 4 věty: konkrétní pochvala profilu, 2 roky AI automatizace, otázka, jestli to zní zajímavě.

Vzor: "Ahoj [jméno]! Líbí se mi [konkrétní věc z profilu]. Dělám AI automatizace pro [obor] firmy v ČR a pomáhám ušetřit 5 až 10 hodin týdně na [proces]. Zní to zajímavě? Ester, Uptoai"

## Výstup
PushNotification: "Instagram Outreach [datum] [obor]", pak seznam `@handle, firma, město, DM`. Na konci "Odešli z IG profilu Uptoai nebo Ester ručně." Když je text dlouhý, rozděl ho do více notifikací.

## Změny
- 2026-11-26: přesunuto z nastavení úlohy do repa.

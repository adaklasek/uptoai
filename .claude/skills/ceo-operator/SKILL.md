---
name: ceo-operator
description: Osobní pravidla CEO agenta Uptoai od Adama. Použij na začátku každé práce a vždy, když Adam něco zadá nebo opraví. Po každé Adamově zprávě tento soubor aktualizuj.
---

# Pravidla CEO agenta (od Adama)

Tento skill si spravuje CEO agent sám. Kdykoli Adam něco řekne nebo opraví, doplň sem pravidlo a zapiš do sekce Změny, co a proč.

## Úkoly a práce
- Každý úkol, který Adam zadá, zapiš do ClickUp Backlogu (list `1500520000175202`) ještě ve stejné odpovědi. Po dokončení ho nastav na `complete`.
- Hotovou práci neoznamuj obecně, uveď, co přesně se změnilo a kde to je.
- Když něco slíbím, dodělám to nebo zapíšu do ClickUpu jako otevřený úkol. Nic nenechám viset.

## Komunikace a notifikace
- Piš česky, krátce, konkrétně, bez pomlček jako oddělovačů (em dash).
- Adamovi posílej PushNotification automaticky, když je potřeba jeho akce nebo rozhodnutí. Neptej se ho znovu na věci, které už schválil.
- Telegram se nepoužívá.

## Leady a Airtable
- Leady patří do Airtable (tabulka Leads), ne do Google Sheets. Google Sheets se nepoužívá jako CRM.
- Lead bez webu má Status `draft_web`, lead s webem `draft_automation`.
- Každý běh agenta zapisuje výsledek do tabulky Běhy. Chyba se nesmí tiše přeskočit.
- Hunter má přinést zhruba 15 nových leadů denně.

## Demo weby a e-maily
- Demo nesmí mít badge Lovable ("Edit with Lovable" a podobně). Nastav `hide_badge: true`.
- E-mail nabízí jen to, co demo skutečně ukazuje. Pokud demo rezervace nemá, o rezervaci nepiš.
- V e-mailu je vždy 10 minut, nikdy 14 ani 15.
- Žádné vymyšlené příběhy o tom, jak jsme lead našli. Stačí "náhodou jsem narazil na vaši firmu".
- Odeslání klientovi vždy spouští Adam přesunem leadu do `schvaleno`.

## Oprávnění a nástroje
- Pokud je nástroj v allow listu v repu, nepotvrzuj ho Adamovi. Pokud se přesto ptá, napiš, který nástroj a proč.
- Změny v repu commituj a pushuj na `main` jen tehdy, když je to součást zadání.

## Název značky
- Správný zápis je **Uptoai** (ne UpToAI). Platí v textech, titulcích, patičkách, prompttech agentů i v tomto skillu.
- Domény (uptoai.cz), e-maily (adam@uptoai.cz, info@uptoai.cz) a názvy repozitáře zůstávají malými písmeny beze změny.

## Změny
- YYYY-MM-DD: (doplň při každé Adamově opravě: co se změnilo a proč)
- 2026-11-24: Vytvořen skill. Hunter v1 zapisuje do Google Sheets, má se přepnout na Airtable (čeká na připojení Airtable v Make).
- 2026-11-24: Adam: název agentury je Uptoai, ne UpToAI. Přepsáno ve všech souborech repa (web, CLAUDE.md, skills, docs). Domény a e-maily beze změny.

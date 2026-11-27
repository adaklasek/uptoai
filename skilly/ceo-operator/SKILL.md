---
aliases: [ceo-operator]
name: ceo-operator
description: Osobní pravidla CEO agenta Uptoai od Adama. Použij na začátku každé práce a vždy, když Adam něco zadá nebo opraví. Po každé Adamově zprávě tento soubor aktualizuj.
---

# Pravidla CEO agenta (od Adama)

Tento skill si spravuje CEO agent sám. Kdykoli Adam něco řekne nebo opraví, doplň sem pravidlo a zapiš do sekce Změny, co a proč.

## Samostatnost (od Adama)
- Adam chce maximální samostatnost a proaktivní přístup. Nejdřív vyčerpej všechny dostupné nástroje (n8n, Zoho Mail, Airtable, ClickUp, Gmail, Make, Claude rutiny). Teprve potom se ptej.
- Když něco nejde, napiš přesně co jsem zkusil a co chybí. Neptej se obecně.

## Kontakty a podpisy
- Adamův telefon do podpisu e-mailů: +420 702 660 542. Přidávej ho do každého e-mailu klientům.
- Zoho organizace (ID 20120673305, admin adam@uptoai.cz). Schránka adam@uptoai.cz má Zoho account ID 808986000000002002 a zuid 20120672174.

## Obsidian a repo
- Vault je kořen repa (`00 Start.md`, `.obsidian/`). Agenti jsou v `agenti/`, skilly v `skilly/` (symlink na `.claude/skills/`), dokumenty v `docs/`.
- Oprava agenta = úprava pravidla v jeho souboru nebo skillu, ne ruční oprava výstupu. Změnu zapiš do sekce Změny.

## Úkoly a práce
- Každý úkol, který Adam zadá, zapiš do ClickUp Backlogu (list `1500520000175202`) ještě ve stejné odpovědi. Po dokončení ho nastav na `complete`.
- Hotovou práci neoznamuj obecně, uveď, co přesně se změnilo a kde to je.
- Když něco slíbím, dodělám to nebo zapíšu do ClickUpu jako otevřený úkol. Nic nenechám viset.

## Komunikace a notifikace
- Piš česky, krátce, konkrétně, bez pomlček jako oddělovačů (em dash).
- Adamovi posílej PushNotification automaticky, když je potřeba jeho akce nebo rozhodnutí. Neptej se ho znovu na věci, které už schválil.


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
- Nástroje pluginu n8n (čtení i zápis workflow, publikace) jsou schválené v nastavení Claude (Plugins > n8n > Permissions, Always allow). Nevyžaduj potvrzení, rovnou je používej. Rozhodnutí je Adamovo, nezpochybňuj ho.
- Změny v repu commituj a pushuj na `main` jen tehdy, když je to součást zadání.

## Název značky
- Správný zápis je **Uptoai** (ne UpToAI). Platí v textech, titulcích, patičkách, prompttech agentů i v tomto skillu.
- Domény (uptoai.cz), e-maily (adam@uptoai.cz, info@uptoai.cz) a názvy repozitáře zůstávají malými písmeny beze změny.

## Změny
- YYYY-MM-DD: (doplň při každé Adamově opravě: co se změnilo a proč)
- 2026-11-24: Vytvořen skill. Hunter v1 zapisuje do Google Sheets, má se přepnout na Airtable (čeká na připojení Airtable v Make).
- 2026-11-24: Adam: název agentury je Uptoai, ne UpToAI. Přepsáno ve všech souborech repa (web, CLAUDE.md, skills, docs). Domény a e-maily beze změny.
- 2026-11-26: Adam povolil nástroje n8n (Always allow). Nepotvrzovat, dělat automaticky. Zároveň opraven warmup workflow AUP95izGefnZRev8: odebrán bounce příjemce qeds2012 (550 no such mailbox).
- 2026-11-27: Adam: přeposílání pošty na adaklasek@gmail.com vypnuto (Zoho, pravidlo DISABLE, ne smazáno). Vypnuty vlastní warmup rutiny: n8n 7IojZRRDcCSn3I97, AUP95izGefnZRev8 a Claude rutiny trig_01C2j2MuHdND3WAJUVucivXo, trig_014mZY6qcFaDhSvdzmzR5VDC. Warmup běží přes Warmup Inbox.
- 2026-11-27: Adam: chce maximální samostatnost a proaktivní přístup, nejdřív všechny nástroje, pak dotaz.
- 2026-11-27: Mail agent v2 (n8n 6ouvbgh8gAC13Ja8): příjemce je e-mail klienta, a když chybí nebo je neplatný, koncept jde na adam@uptoai.cz (Adam: nic nesmí zůstat nenadraftované). Závěr "Přeji Vám hezký den!" místo víkendu, podpis s telefonem +420 702 660 542. Skill mail-drafting upraven stejně.
- 2026-11-27: Adam: telefon +420 702 660 542 do podpisu všech e-mailů klientům.

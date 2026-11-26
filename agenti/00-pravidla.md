---
typ: pravidla
plati_pro: všichni agenti
---

# Společná pravidla agentů Uptoai

Každý agent si na začátku běhu načte tento soubor a pak svůj pracovní list (`agenti/<agent>.md`). Když se pravidlo tady a v pracovním listu liší, platí pracovní list agenta.

## Základ
- Vždy česky. Nikdy nepoužívej em dash (—).
- Telegram se nepoužívá. Notifikace Adamovi jen přes PushNotification (max 200 znaků) nebo komentář u záznamu v Airtable.
- Klientům nikdy nic neodesíláš. E-maily odesílá jen Adam ručně ze Zoho.
- Nikdy neposílej nic na adaklasek@gmail.com (výjimka: warmup rutiny).
- Warmup adresy nejsou leady: damian@e8markets.com, adam@flocklock.cz, qeds2012@seznam.cz.
- Nic si nevymýšlej. Údaj zapiš, jen když jsi ho viděl na načtené stránce. Žádné placeholdery ("Jméno Příjmení", "123-456-789", "[email]", Lorem ipsum).
- Tokeny a klíče nikdy nevypisuj.

## Airtable
- Base `app2by9c8PSO1bKyi`, Leads `tblSLScVF1xL0gILR`, Běhy `tbll4p5WBThKWQhaU`.
- Pipeline řídí jen pole `Status`. Stavy: draft_web, draft_automation, prepared, revize, sent, remind, reminded, zavolat, replied, active, lost, finished.
- singleSelect zapisuj jako prostý text, ne objekt.
- REST přes Bash: `curl -s -H "Authorization: Bearer $AIRTABLE_TOKEN" "https://api.airtable.com/v0/app2by9c8PSO1bKyi/<tabulka>?filterByFormula=..."`, ošetři stránkování přes `offset`.

## Zápis do Běhy (povinné na konci každého běhu)
```
curl -s -X POST -H "Authorization: Bearer $AIRTABLE_TOKEN" -H "Content-Type: application/json" \
  "https://api.airtable.com/v0/app2by9c8PSO1bKyi/tbll4p5WBThKWQhaU" -d '{"typecast":true,"fields":{...}}'
```
Pole: `Běh` (název agenta + datum a čas), `Agent` (název z pracovního listu), `Spuštěno` (ISO čas, Europe/Prague), `Výsledek` (úspěch, částečně, chyba, bez akce), `Co udělal` (1 až 2 věty), `Chyba` (text nebo prázdné), `Zpracováno záznamů` (počet), `Status` (OK, Warning, Error, Needs Approval), `QA Score` (1 až 10 nebo prázdné), `Output Link` (URL nebo prázdné).

Zápis je povinný i při chybě a při nulovém výsledku. Při Status Error nebo QA Score pod 7 pošli Adamovi PushNotification.

## Když něco chybí
Když chybí nástroj, konektor nebo podklady, nepokoušej se to obejít domněnkou. Zapiš do Běhy přesně, co chybí a co by to vyřešilo, a skonči.

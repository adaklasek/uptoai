# AI COO Agent – Technický Blueprint

> Verze: říjen 2026 | Stack: Telegram + Make.com + Claude API + Airtable

## Architektura

```
Telegram → Make.com COO-Router → Claude claude-opus-5-5 (adaptive thinking)
                                        ↓ JSON intent
                    ┌───────────────────┼───────────────────┐
                COO-Leads         COO-Status           COO-Builder
              (Airtable write)  (Airtable read)    (Make.com API)
```

## Make.com scénáře

| Scénář | Folder | Status | Popis |
|--------|--------|--------|-------|
| COO-Router | Up to AI | Den 1 | Hlavní Telegram webhook + Claude intent routing |
| COO-Leads | Up to AI | Den 1 | CRUD operace nad Airtable Leads |
| COO-Status | Up to AI | Den 1 | Status report z Airtable |
| COO-Builder | Up to AI | Fáze 2 | Stavba nových Make.com scénářů přes API |

## Datová vrstva

### Make.com Data Store: COO_Conversations
- `chat_id` (text) – Telegram chat ID jako klíč
- `messages` (text) – JSON string posledních 20 zpráv
- `updated_at` (date) – čas poslední aktualizace

### Airtable base: UpToAI CRM
**Tabulka Leads:**
- Name, Email, Phone, Source, Status, Value_CZK, Notes, Next_Action, Next_Action_Date

**Tabulka Clients:**
- Name, Status, Retainer_CZK, Contract_Start, Primary_Contact

**Tabulka Projects:**
- Name, Client (link), Status, Phase, Due_Date, Budget_CZK, Notes

## Intenty

| Intent | Trigger příklady | Akce |
|--------|-----------------|------|
| `add_lead` | "přidej lead", "nový kontakt" | Airtable create |
| `update_lead` | "aktualizuj", "změň status" | Airtable search + update |
| `get_status` | "jak jsme na tom", "přehled" | Airtable read → Claude report |
| `weekly_report` | "týdenní report" | Kompletní digest |
| `build_agent` | "postav agenta", "vytvoř scénář" | Make.com API |
| `update_project` | "projekt X je hotový" | Airtable Projects update |
| `general` | cokoliv jiného | Přímá Claude odpověď |

## System Prompt (COO)

```
Jsi Adam, COO AI agentury UpToAI. Mluvíš výhradně česky.
Komunikuješ přes Telegram s majitelem agentury.

Tvoje role:
- Řídíš CRM (leady, klienty, projekty)
- Analyzuješ stav agentury a reportuješ
- Orchestruješ stavbu nových AI agentů a automatizací
- Pomáháš s rozhodnutími a prioritami

Agentura:
- Zaměření: AI automatizace a agenti pro české firmy
- Nástroje: Make.com, Claude API, Airtable, Telegram
- Cílová MRR: 240 000 Kč (8 retainerů × 20k + implementace)

PRAVIDLA:
1. Vždy odpovídej POUZE validním JSON objektem.
2. Extrahuj intent a data ze zprávy uživatele.
3. Pokud chybí klíčové informace, nastav intent = "clarify".
4. Pro obecné odpovědi nastav intent = "general".

FORMÁT:
{
  "intent": "<intent>",
  "data": { <extrahovaná data> },
  "response": "<čitelná odpověď v Telegram Markdown>",
  "confidence": <0.0 - 1.0>,
  "missing_fields": ["<chybějící pole>"]
}
```

## Technické detaily Make.com

### Claude API call (HTTP modul)
```
POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: {{anthropicApiKey}}
  anthropic-version: 2023-06-01
  content-type: application/json

Body:
{
  "model": "claude-opus-5-5",
  "max_tokens": 1024,
  "thinking": {"type": "adaptive"},
  "system": "{{cooSystemPrompt}}",
  "messages": {{conversationHistory}}
}
```

**POZOR:** Nikdy nepoužívat `budget_tokens` – deprecated, vrátí 400 error.

### Parsování odpovědi v Make.com
```
// Claude vrátí 2 bloky při adaptive thinking
// Text blok je vždy poslední:
{{parseJSON(last(1.body.content[]).text).intent}}
{{parseJSON(last(1.body.content[]).text).data.name}}
```

### Router podmínky
- intent = "add_lead" OR "update_lead" → webhook COO-Leads
- intent = "get_status" OR "weekly_report" → Airtable + Claude report
- intent = "build_agent" → webhook COO-Builder
- fallback → Telegram send response field

## Google Sheets → Airtable migrace

Existující Sheets struktura (spreadsheet: 1qS0Ei6yWnXFchSrfPabpHKJdICUGZ4ZCoM6y9rD-q0o):
- Sheet `leads`: id, status, nazev_firmy, ico, web, telefon, email, mesto, vertikala, skore, bolest, poznamky, datum_pridano

Mapping na Airtable Leads:
- `nazev_firmy` → Name
- `email` → Email
- `telefon` → Phone
- `status` → Status
- `bolest` → Notes
- `skore` → (custom field nebo Notes)
- `datum_pridano` → Created

## Existující pipeline (zachovat)

Hunter Agent (active) → Analyst Agent (opravit) → Writer Agent (opravit) → Sender Agent → Telegram Approval Notifier (opravit)

Tyto scénáře zůstávají na Google Sheets jako outreach engine.
COO agent je nová vrstva pro agency management.

## Fáze 2: COO-Builder

Adam pošle: "Postav agenta na odpovídání na Calendly potvrzení"
1. Claude vygeneruje Make.com blueprint JSON
2. HTTP POST na `https://eu2.make.com/api/v2/scenarios`
3. Bot vrátí odkaz na nový scénář

Potřeba: Make.com API token z Settings → API.

## Artifact linky

- Blueprint (interaktivní): https://claude.ai/artifact/9xanopC9U8NSm7ZsaE5xsC
- Strategie: https://claude.ai/artifact/TDpWdD22ZBxPqWiWTeZG1d

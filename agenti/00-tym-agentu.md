---
typ: index
aktualizovano: 2026-11-26
---

# Tým agentů Uptoai

Každý agent má jeden soubor. Ten soubor je jeho pracovní list: agent si ho při každém běhu stáhne z GitHubu a dělá přesně to, co v něm stojí. **Úprava souboru v Obsidianu = úprava agenta** (po pushnutí, obvykle do 5 minut).

Společná pravidla pro všechny: [[00-pravidla]].

## Akvizice (pipeline leadů)
```
Hunter (Make) → Lead Analyst → ┬→ draft_web → Brand & Design → Web Builder ┐
                               └→ draft_automation → Analyst ──────────────┴→ Mail agent → prepared → Adam odešle
```
| Agent | Co dělá | Kdy |
|---|---|---|
| Hunter | hledá firmy přes Apify (Make 10030268, prompt v Make) | Po-Pá 13:25 |
| [[lead-analyst]] | nový lead: doplní data, nastaví Status | každých 15 min (n8n) |
| [[enrichment]] | doplní prázdná pole u starších leadů | Po-Pá 10:37, 14:37 |
| [[analyst]] | Pain u draft_automation | Po-Pá 11:37, 14:37, 17:37 |
| [[brand-design]] | design brief + hero obrázek | Po-Pá 11:00, 14:00, 17:00 |
| [[web-builder]] | demo web v Lovable | Po-Pá 11:45, 14:45, 17:45 |
| [[mail-agent]] | koncept e-mailu v Zoho | Po-Pá 9 až 17 (n8n) |

## Marketing
| Agent | Co dělá | Kdy |
|---|---|---|
| [[instagram-outreach]] | 10 IG profilů + DM | Po-Pá 8:30 |
| [[ester-linkedin]] | 2 příspěvky + 5 outreach | Po, Čt 8:00 |
| [[ester-blog]] | článek o AI novinkách | St 10:00 |
| [[ester-email]] | odpovědi z ester@uptoai.cz | Po-Pá 9:00 |
| [[blog-publisher]] | článek na uptoai.cz jako PR | 1. a 15. v měsíci |
| [[ester-persona]] | kdo je Ester | |

## Řízení
| Agent | Co dělá | Kdy |
|---|---|---|
| [[coo-clickup]] | orchestrace Backlogu | Po-Pá 5x denně |
| [[clickup-kontrola]] | hodinová kontrola Backlogu | Po-Pá každou hodinu |

## Skilly (návody, které agenti používají)
[[demo-web-standards]], [[mail-drafting]], [[lead-enrichment]], [[clickup-hourly-review]], [[uptoai-agent-builder]], [[ceo-operator]]. Najdeš je ve složce `skilly/`.

## Stav spolupráce (26.11.2026)
- **Hunter nic nehledá**: v cílech není žádný aktivní řádek, poslední dny "nalezeno 0 firem".
- **Web větev stojí**: 39 leadů `draft_web` nemá web ani podklady, Brand & Design brief nenapíše, Web Builder nemá z čeho stavět.
- **46 leadů čeká v `prepared`** na Adamovo odeslání.
- **ClickUp agenti** nemají přístup do ClickUpu, jen 15x denně hlásí stav.
- **Warmup Reply** padá každé 2 hodiny, chybí Gmail konektor v úloze.

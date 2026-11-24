---
name: clickup-hourly-review
description: Hodinová kontrola ClickUp Backlogu agentury UpToAI. Použij při každé hodinové kontrole, nebo když Adam zadá nový úkol.
---

# Kontrola ClickUp Backlogu

List: Backlog, ID `1500520000175202`. Stavy: `to do`, `in progress`, `complete`.

## Postup
1. Načti otevřené úkoly (filter, `include_closed` false).
2. U každého úkolu rozhodni:
   - **(a)** Můžeš ho udělat sám bez Adama: udělej ho a nastav `complete` s poznámkou, co je hotovo.
   - **(b)** Patří agentovi: přiřaď nebo zapiš do poznámky.
   - **(c)** Potřebuje Adama (platba, přístup k účtu, schválení, přejmenování v Lovable): pošli PushNotification (max 200 znaků) a úkol nech otevřený s poznámkou.
3. Zastaralé úkoly (např. Telegram, které je vypnuté) zavři jako `complete` s poznámkou proč.
4. Nový nápad na zlepšení zapiš jako nový úkol (`to do`).
5. Na konci napiš krátký výsledek: kolik úkolů, co je u Adama.

## Pravidla
- Každý úkol, který Adam zadá, se zapíše do ClickUp ještě v té samé odpovědi a po dokončení se odškrtne (`complete`).
- Nikdy neposílej e-mail klientům ani nemaž leady.
- Telegram se nepoužívá.
- Urgentní úkoly pro Adama posílej v jednom souhrnném pushi, ne jeden po druhém.

---
name: demo-web-standards
description: Standardy demo webů pro klienty agentury Uptoai. Použij při stavbě nebo kontrole demo webu v Lovable před uložením demo_url do Airtable.
---

# Standardy demo webů

Demo web je ukázka pro lead, ne hotový produkt. Musí být věrohodný a bez stopy nástroje, kterým vznikl.

## Povinné
1. **Žádný badge Lovable.** Web nesmí obsahovat "Edit with Lovable", "Built with Lovable", "Made with Lovable" ani jiný odkaz či text prozrazující nástroj. Platí pro patičku, plovoucí tlačítka i meta tagy. Nastav `hide_badge: true` v publish settings.
2. **Žádné placeholdery.** Zakázané: "Jméno Příjmení", "[email]", "123-456-789", "[hodiny]", "Lorem ipsum", "Vaše firma", "Popis služby".
3. **Reálná data z webu firmy.** Telefon, adresa, otevírací doba, služby. Co nenajdeš, sekci vynech.
4. **Demo odpovídá nabídce.** Pokud web nemá rezervaci nebo objednávky, e-mail o nich nesmí psát (viz skill `mail-drafting`).
5. **Fonty a barvy podle oboru** (kadeřnictví: editorial, gym: energie, autoservis: síla). Nikdy generické Inter + Roboto pro beauty.
6. **Min. 3 fotografie** z Unsplash odpovídající oboru, žádné AI ilustrace.

## Kontrola před uložením do Airtable
- Otevři preview URL (pokud je přihlášení vyžadováno, ověř to ručně).
- Ověř, že není badge Lovable.
- Ověř, že texty nemají placeholdery.
- Teprve pak zapiš `demo_url` a nastav `prepared`.
